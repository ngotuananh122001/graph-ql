const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const {
    ApolloServerPluginDrainHttpServer,
    ApolloServerPluginLandingPageLocalDefault,
} = require('apollo-server-core');

const typeDefs = require('./schema/schema');
const resolvers = require('./resolver/resolver');

const http = require('http');

async function startApolloServer() {
    const app = express();
    // Our httpServer handles incoming requests to our Express app.
    // Below, we tell Apollo Server to "drain" this httpServer,
    // enabling our servers to shut down gracefully.
    const httpServer = http.createServer(app);
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        plugins: [
            ApolloServerPluginLandingPageProductionDefault({
                graphRef: 'my-graph-id@my-graph-variant',
                footer: false,
            }),
            //ApolloServerPluginLandingPageLocalDefault({ embed: true }),
        ],
    });

    await server.start();

    // Mount Apollo middleware here.
    server.applyMiddleware({ app });
    await new Promise((resolve) =>
        httpServer.listen({ port: process.env.PORT || 4000 }, resolve)
    );
    console.log(
        `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
    );
    return { server, app };
}

startApolloServer();
