const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = require('graphql');


const OrderType = new GraphQLObjectType({
    name: 'Order',
    fields: () => ({
        id: { type: GraphQLID },
        orderDate: { type: GraphQLString },
        totalAmount: { type: GraphQLInt }
    }),
});

module.exports = { OrderType }