require('dotenv').config()

const username = process.env.USERNAME
const password = process.env.PASSWORD
const database = process.env.DATABASE

module.exports = {
  db: `mongodb+srv://${username}:${password}@cluster.v64n6.mongodb.net/${database}?retryWrites=true&w=majority`,
}
