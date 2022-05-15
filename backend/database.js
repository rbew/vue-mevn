require('dotenv').config()

const user = process.env.USER
const database = process.env.DATABASE
const passwd = process.env.PASSWORD

module.exports = {
  db: `mongodb+srv://${user}:${passwd}@cluster.v64n6.mongodb.net/${database}?retryWrites=true&w=majority`,
}
