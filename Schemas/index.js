const graphql = require('graphql');
const { GraphQLObjectType, GraphQLSchema, GraphQLInt, GraphQLString, GraphQLList } = graphql;
//const customerData = require("../Mock_data.json");
const CustomerType = require('./TypeDefs/CustomerType')

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getAllCustomers: {
            type: new GraphQLList(CustomerType),
            args: { id: { type: GraphQLInt } },
            resolve(parent, args) {
                return customerData;
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        CreateCustomer: {
            type: CustomerType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                email: {type: GraphQLString},
                countryCode: { type: GraphQLString },
                mobileNumber: { type: GraphQLString },
                reason: { type: GraphQLString }
            },
            resolve(parent, args) {
                customerData.push({
                    id: customerData.length + 1,
                    firstName: args.firstName,
                    lastName: args.lastName,
                    email: args.email,
                    countryCode: args.countryCode,
                    mobileNumber: args.mobileNumber,
                    reason: args.reason
                });
                return {
                    message: "Data is pushed"
                };
            }
        }
    }
});

module.exports = new GraphQLSchema({ query: RootQuery, mutation: Mutation });