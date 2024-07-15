import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import { Provider, useSelector } from 'react-redux';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';

const CustomThemeProvider = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  const theme = createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const ThemeWrapper = ({ children }) => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  React.useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return children;
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeWrapper>
      {/* <CustomThemeProvider> */}
    <Auth0Provider
       domain="dev-ny7heca578equ14x.us.auth0.com"
       clientId="q9kRIbWWZ0vc1c9EcMEmlO1iEfX1t66v"  
       authorizationParams={{
         redirect_uri: window.location.origin
       }}
    >
      <App />
    </Auth0Provider>
    </ThemeWrapper>
    {/* </CustomThemeProvider> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
