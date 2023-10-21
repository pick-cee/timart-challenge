const { GraphQLSchema, GraphQLObjectType, GraphQLID, GraphQLList } = require('graphql');
const UserMutation = require('./resolvers/userResolver');
const { UserType } = require('./types/userType')
const { OrderType } = require('./types/orderType')
const db = require('../models')
const OrderMutation = require('./resolvers/orderResolver');

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return db.users.findByPk(args.id);
            },
        },
        userOrders: {
            type: new GraphQLList(OrderType),
            args: { userId: { type: GraphQLID } },
            resolve(parent, args) {
                return db.orders.findAll({ where: { userID: args.userId } });
            },

        }
    }
});

const RootMutation = new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
        ...UserMutation,
        ...OrderMutation,
    },
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});

