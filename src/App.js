import React, { useState } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './graph/client';
import List from "./components/List";
import Header from './components/Header';

const App = () => {
  // Topic to searh
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ApolloProvider client={client}>
      <Header value={searchTerm} onChange={setSearchTerm} />
      <List searchTerm={searchTerm} onClick={setSearchTerm} />
    </ApolloProvider>
  );
};

export default App;
