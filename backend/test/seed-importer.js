const User =  require('../src/models/user')

const userData = require('./seeds/users')

const importUsers = () => {
    const promises = []
    userData.forEach(user => promises.push(User.create(user)))
    return Promise.all(promises)
}

module.exports = { importUsers }