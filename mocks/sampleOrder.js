const faker = require('faker')
const db = require('../models')

const Order = db.orders
const User = db.users

async function insertSampleOrders() {
    for (let i = 0; i < 5000; i++) {
        // Generate a random user ID
        const userId = faker.random.number({ min: 1, max: 1000 });

        await Order.create({
            userID: userId,
            orderDate: faker.date.past(),
            totalAmount: faker.finance.amount(),
        });
    }
}

module.exports = {
    insertSampleOrders
}