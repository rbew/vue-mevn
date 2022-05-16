const mongoose = require('mongoose')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Schema = mongoose.Schema

let userSchema = new Schema(
  {
    userid: {
      type: Number,
      required: [true, "Please Include your id"]
    },
    password: {
      type: String,
      required: [true, "Please Include your password"]
    },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  {
    collection: 'users',
  }
)

// this method will hash the password before saving
userSchema.pre("save", async function(next) {
  // Hash the password before saving the user model
  const user = this
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 8)
  }
  next()
})

// this method generates an auth token for the user
userSchema.methods.generateAuthToken = async function() {
  const user = this
  const token = jwt.sign(
    { _id: user._id, userid: user.userid}, 
    "secret"
  )
  user.tokens = user.tokens.concat({ token })
  await user.save()
  return token
}

userSchema.statics.findByCredentials = async (userid, password) => {
  const user = await User.findOne({ userid })
  if (!user) {
    throw new Error({ error: "Invalid login details"})
  }
  const isPasswordMatch = await bcrypt.compare(password, user.password)
  if (!isPasswordMatch) {
    throw new Error({ error: "Invalid login details"})
  }
  return user
}

const User = mongoose.model("User", userSchema);
module.exports = User;
