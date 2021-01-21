const mongoose = require('mongoose')
const faker = require('faker')

const { dbURI } = require('../config/environment')
const Beans = require('../models/beans')
const Roasters = require('../models/roaster')
const Users = require('../models/user')
const beansData = require('./data/beans')
const roasterData = require('./data/roasters')
const userData = require('./data/users')


mongoose.connect(
  dbURI,
  { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err) => {
    if (err) { // Any Error? Log it
      console.log(err)
      return
    }
    try {
      // await mongoose.connection.db.dropDatabase()//Delete Prior Database

      const beans = await Beans.create(beansData)
      console.log(` ☕️ ${beans.length} products created ☕️`)

      const roasters = await Roasters.create(roasterData)
      console.log(` ☕️ ${roasters.length} roasters created ☕️`)

      const users = await Users.create(userData)
      const createdUsers = await Users.create(users)
      console.log(` ☕️ ${createdUsers.length} users created ☕️`)
  


    } catch (err) {
      console.log(err) // Any error? Log it
    }
    console.log('Goodbye')
    await mongoose.connection.close()
  })