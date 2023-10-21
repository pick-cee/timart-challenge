const db = require('../../models')
const graphql = require('graphql')
const { OrderType } = require('../types/orderType')

const OrderMutation = {
    createOrder: {
        type: OrderType,
        args: {
            userID: { type: graphql.GraphQLID },
            orderDate: { type: graphql.GraphQLString },
            totalAmount: { type: graphql.GraphQLInt },
        },
        resolve(parent, args) {
            return db.orders.create(args)
        }
    }
}

module.exports = OrderMutation