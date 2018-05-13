const { makeExecutableSchema } = require('graphql-tools');
const {
	getContacts,
	getContact,
	deleteContact
} = require('./data');

const typeDefs =`	
  type Contact {
  	id: String, 
  	firstName: String, 
  	lastName: String, 
  	phoneNumbers: [String] 
  }
    
  type Query { 
  	contacts: [Contact]
  	contact(id: String!): Contact 
	}	
`;

const resolvers = {
	Query: {
		contacts: () => getContacts(),
		contact: (_, {id}) => getContact(id),
	}
};

exports.schema = makeExecutableSchema({
	typeDefs,
	resolvers
});