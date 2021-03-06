import express from 'express';

import { SoundCloudGraphQLSchema } from './schema';

// Need to import Instagram and Twitter Schemas here

require('dotenv').config();

var graphqlHTTP = require('express-graphql');

var app = express();

const port = process.env.PORT;

app.use(
  '/graphql',
  graphqlHTTP({
    schema: SoundCloudGraphQLSchema,
    graphiql: true
  })
);

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
