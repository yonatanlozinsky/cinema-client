/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { render } from '@testing-library/react';
import initialState from '../mocks/initialState';
import theme from '../theme';
import { AppState } from '../store/reducers';
import { ThemeProvider } from 'styled-components';


export const renderApp = (children: React.ReactChild, state: AppState = initialState, themeKey = 'green') => {
  const createMockStore = configureStore([]);
  const store = createMockStore(state);

  return {
      ...render(
        <Provider store={store}>
          <ThemeProvider theme={theme[themeKey]}>
            {children}
          </ThemeProvider>
        </Provider>
      ),
      store,
  };
};
