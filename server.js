const express = require('express')
const db = require('./models');
const { insertSampleOrders } = require('./mocks/sampleOrder')
const { insertSampleUsers } = require('./mocks/sampleUsers')
require('dotenv').config()
const userRoutes = require('./routes/userRoutes')
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/graphql.schema')
const { ApolloServer, gql } = require('apollo-server-express');

const app = express()
const port = process.env.PORT

const startServer = async () => {
    const server = new ApolloServer({
        schema,
        introspection: true,
        playground: true,
    });

    await server.start();

    server.applyMiddleware({ app });
};


db.sequelize.sync().then(async () => {
    // await insertSampleUsers()
    // await insertSampleOrders()
    console.log('Database synchonised successfully')
})

app.use(express.json())

app.get('/', (request, response) => {
    response.send('You are here')
})
app.use('/users', userRoutes)

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true, // Set to true to enable the GraphiQL interface for testing
}));

app.listen(port, async () => {
    startServer()
    console.log(`App listening on port ${port}`)
})
