const graphql = require('graphql');
const { GraphQLObjectType, GraphQLInt, GraphQLString} = graphql;
const { graphqlHTTP } = require('express-graphql');

const CustomerType = new GraphQLObjectType({
    name: "Customer",
    fields: () => ({
        id: { type: GraphQLInt },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        countryCode: { type: GraphQLString },
        mobileNumber: { type: GraphQLString },
        reason: { type: GraphQLString }
    })
});

module.exports = CustomerType;