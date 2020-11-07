import React, { Fragment } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Header from './components/Header';
import Products from './components/Products';

import './styles/normalize.css';
import './styles/font.css';
import './styles/base.css';

const client = new ApolloClient({
  uri: 'https://pangaea-interviews.now.sh/api/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <Products />
    </ApolloProvider>
  );
}

export default App;
