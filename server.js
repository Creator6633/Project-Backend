const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 5000;
const graphql = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schemas/index')

app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log("Server is Up and Running");
});
