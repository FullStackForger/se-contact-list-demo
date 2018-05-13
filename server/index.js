const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { dataTypes: typeDefs } = require("./internal/data");
const schema = require('./internal/schema');

const PORT = 3010;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
app.get('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

const listener = app.listen(PORT, () => {
	console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});