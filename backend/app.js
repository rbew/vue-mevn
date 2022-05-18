const express = require('express'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  database = require('./database'),
  createError = require('http-errors'),
  port = process.env.PORT || 4000

// Connect mongoDB
mongoose.Promise = global.Promise
mongoose
  .connect(database.db, {
    /**
     * https://mongoosejs.com/docs/migrating_to_6.html#no-more-deprecation-warning-options
     
    useNewUrlParser: true, <-- no longer necessary
    useUnifiedTopology: true, <-- no longer necessary
    */
  })
  .then(
    () => {
      console.log('Database connected')
    },
    (error) => {
      console.log("Database could't be connected to: " + error)
    },
  )

const studentAPI = require('./routes/student.route')
const userAPI = require('./routes/user.route')

const app = express()

app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(cors())

// API
app.use('/api', studentAPI)
app.use('/user', userAPI)

// Create port
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
