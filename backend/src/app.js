const createError = require('http-errors')

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const appointmentRouter = require('./routes/appointments')
const sessionRouter = require('./routes/sessions')
const cors = require('cors')
const User = require('./models/user')
require('./database-connection')

const app = express()
app.use(
  cors({
    origin: true,
    credentials: true
  })

}

User.create({
  firstName: 'Alina',
  lastName: 'Ghetler',
  email: 'alina@cucu.com',
  password: 'ccucu',
  phoneNumber: 12345,
  type: 'patient',
})

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/', indexRouter)
app.use('/api/users', usersRouter)
app.use('/api/appointment', appointmentRouter)
app.use('/api/session', sessionRouter)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
