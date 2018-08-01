import React from 'react'
import { ApolloProvider } from 'react-apollo';
import { Root } from 'native-base';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducers from './reducers';
import link from './client/link';
import RootStack from './navigators/root';

const store = createStore(
  rootReducers,
  applyMiddleware(thunk)
);

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link,
});

export default () => (
  <Root>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <RootStack />
      </Provider>
    </ApolloProvider>
  </Root>
);