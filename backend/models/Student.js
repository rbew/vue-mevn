const mongoose = require('mongoose')
const Schema = mongoose.Schema

let studentSchema = new Schema(
  {
    sid: {
      type: Number,
    },
    name: {
      type: String,
    },
    class: {
      type: String,
    },
    phone: {
      type: Number,
    },
  },
  {
    collection: 'students',
  }
)

module.exports = mongoose.model('Student', studentSchema)
