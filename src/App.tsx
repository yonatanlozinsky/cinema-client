import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import Movies from './screens/Movies/Movies';

export const App = () => {
  const store = createStore();
  
  return (
    <Provider store={store}>
      <Movies />
    </Provider>
  );
};
