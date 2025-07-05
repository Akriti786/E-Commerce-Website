import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-zqtb5u87bgfrjccr.us.auth0.com"
    clientId="x8iF9ZLeiU3vaLKuwjSOpUzHue7htlYD"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
     <App />
  </Auth0Provider>
)
