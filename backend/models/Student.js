const mongoose = require('mongoose')
const Schema = mongoose.Schema

let studentSchema = new Schema(
  {
    sid: Number,
    name: String,
    class: String,
    phone: Number,
  },
  {
    collection: 'students',
  }
)

module.exports = mongoose.model('Student', studentSchema)
