const mongoose = require('mongoose')

const username = process.env.MONGODB_USERNAME
const password = process.env.MONGODB_PASSWORD
const dbName = process.env.MONGODB_DATABASE
const dbHost = process.env.MONGODB_HOST

mongoose.set('debug', true)
const connectionString = process.env.MONGODB_REMOTE ? `mongodb://${dbHost}/${dbName}?retryWrites=true&w=majority` : 'mongodb://localhost:'

/* mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.knvjh.gcp.mongodb.net/${dbName}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('connection established'))
  .catch(console.log) */

// mongoose
//   .connect(`mongodb://${dbHost}/${dbName}?retryWrites=true&w=majority`, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('connection established'))
//   .catch(console.log)
