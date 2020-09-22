const createError = require('http-errors')

const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const passport = require('passport')
const localStrategy =require('passport-local')
const mongooseConnection = require('./database-connection')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const appointmentRouter = require('./routes/appointments')
const sessionRouter = require('./routes/sessions')
const User = require('./models/user')
const accountsRouter = require('./routes/accounts')
const authRouter = require('./routes/auth')
const auth = require('./routes/auth')

const app = express()
app.use(
  cors({
    origin: true,
    credentials: true
  })
)

app.use(
  session({
    secret: ['thisissupersecuresecretsecuresecret', 'thisissupersecuresecretsecuresecret'],
    store: new MongoStore({ mongooseConnection, stringify: false }),
    cookie: {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      path: '/api'
    }
  })
)

app.use(passport.initialize())
app.use(passport.session())

passport.use(User.createStrategy())

passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())



// view engine setup
app.set('trust proxy', 1)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use('/api', (req, res, next) => {
  req.session.viewCount = req.session.viewCount || 0
  // eslint-disable-next-line no-plusplus
  req.session.viewCount++
  next()
})

app.use(express.static(path.join(__dirname, 'public')))

app.use('/api/', indexRouter)
app.use('/api/account', accountsRouter)
app.use('/api/users', usersRouter)
app.use('/api/appointment', appointmentRouter)
app.use('/api/session', sessionRouter)
app.use('/api/auth', authRouter)
// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})
app.use('./auth', auth)
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
