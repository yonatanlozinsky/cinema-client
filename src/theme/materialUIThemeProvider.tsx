import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useTheme } from 'styled-components';

// Used for controlling "primary" color in MUI components.
const MuiProvider: React.FC = (props) => {
    const { children } = props;
    const mainTheme = useTheme();
    const muiTheme = createMuiTheme({
        palette: {
          primary: {
              main: mainTheme.primaryColor
            },
          secondary: {
            main: mainTheme.red
          }
          }
        },
      );

      return (
          <MuiThemeProvider theme={muiTheme}>
              {children}
          </MuiThemeProvider>
      );

};

export default MuiProvider;
