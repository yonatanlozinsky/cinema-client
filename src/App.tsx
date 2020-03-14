import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
import { ThemeProvider } from 'styled-components';
import themes from './theme';
import GlobalStyles from './theme/globalStyle';
import Movies from './screens/Movies/Movies';
import ModalContainer from './components/Modals/ModalContainer';
import MaterialUiThemeProvider from './theme/materialUIThemeProvider';

export const App = () => {
  const store = createStore();

  return (
    <Provider store={store}>
      <GlobalStyles />
      <ThemeProvider theme={themes.green}>
        <MaterialUiThemeProvider> 
          <Movies />
          <ModalContainer />
        </MaterialUiThemeProvider>
      </ThemeProvider>
    </Provider>
  );
};
