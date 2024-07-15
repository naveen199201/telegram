import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import reportWebVitals from './reportWebVitals';
import store from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <Auth0Provider
       domain="dev-ny7heca578equ14x.us.auth0.com"
       clientId="q9kRIbWWZ0vc1c9EcMEmlO1iEfX1t66v"  
       authorizationParams={{
         redirect_uri: window.location.origin
       }}
    >
      <App />
    </Auth0Provider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
