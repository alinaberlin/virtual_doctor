const User = require('../../src/models/user')
const { importUsers } = require('../seed-importer')

describe('User Crud Test Suite', () => {
  beforeAll(async () => {
    require('../../src/database-connection')
    await User.deleteMany({})
    await importUsers()
  })

  test('Should find user by email', async () => {
    const userToFind = await User.find({ email: 'john@mail.de' })
    expect(JSON.parse(JSON.stringify(userToFind[0]))).toStrictEqual(
      JSON.parse(
        JSON.stringify({
          firstName: 'John',
          lastName: 'Black',
          email: 'john@mail.de',
          password: '1234',
          phoneNumber: 123,
          type: 'doctor',
          _id: userToFind[0]._id,
          __v: userToFind[0].__v
        })
      )
    )
  })
})
