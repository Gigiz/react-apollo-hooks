import React, { Suspense } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';

import CategoryList from '../components/CategoryList';

const client = new ApolloClient({
  uri: 'https://graphql-compose.herokuapp.com/northwind',
});

const App = () => (
  <ApolloProvider client={client} >
    <Suspense fallback={<div>Loading...</div>}>
      <CategoryList />
    </Suspense>
  </ApolloProvider>
);

export default App;