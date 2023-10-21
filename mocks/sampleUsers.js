const faker = require('faker')
const db = require('../models')

const User = db.users

async function insertSampleUsers() {
    for (let i = 0; i < 1000; i++) {
        await User.create({
            username: faker.internet.userName(),
            email: faker.internet.email()
        })
    }
}

module.exports = {
    insertSampleUsers
}