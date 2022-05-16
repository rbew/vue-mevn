const User = require('../models/User')

exports.registerNewUser = async (req, res) => {
  try {
    let isUser = await User.find({ userid: req.body.userid })
    console.log(isUser)
    if (isUser.length >= 1) {
      return res.status(409).json({
        message: 'you already registered',
      })
    }
    const user = new User({
      userid: req.body.userid,
      password: req.body.password,
    })
    let data = await user.save()
    const token = await user.generateAuthToken() // here it is calling the method that we created in the model
    res.status(201).json({ data, token })
  } catch (err) {
    res.status(400).json({ err: err })
  }
}

exports.loginUser = async (req, res) => {
  try {
    const userid = req.body.userid
    const password = req.body.password
    const user = await User.findByCredentials(userid, password)
    if (!user) {
      return res
        .status(401)
        .json({ error: 'Login failed! Check authentication credentials' })
    }
    const token = await user.generateAuthToken()
    res.status(201).json({ user, token })
  } catch (err) {
    res.status(400).json({ err: err })
  }
}

exports.getUserDetails = async (req, res) => {
  await res.json(req.userData)
}
