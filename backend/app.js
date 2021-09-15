let express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  database = require('./database'),
  bodyParser = require('body-parser'),
  createError = require('http-errors')

// Connect mongoDB
mongoose.Promise = global.Promise
mongoose
  .connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    () => {
      console.log('Database connected')
    },
    (error) => {
      console.log("Database could't be connected to: " + error)
    },
  )

const studentAPI = require('../backend/routes/student.route')
const app = express()
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
)
app.use(cors())

// API
app.use('/api', studentAPI)

// Create port
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use(function (req, res, next) {
  console.error(req.message)
  if (!req.statusCode) req.statusCode = 500
  return next(res.status(req.statusCode).send(req.message))
})
