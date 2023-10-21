const db = require('../../models')
const graphql = require('graphql')
const { UserType } = require('../types/userType')

const UserMutation = {
    createUser: {
        type: UserType,
        args: {
            username: { type: graphql.GraphQLString },
            email: { type: graphql.GraphQLString }
        },
        resolve(parent, args) {
            return db.users.create(args)
        }
    }
}

module.exports = UserMutation