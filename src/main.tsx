import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthContextComponent from "./contexts/AuthContext";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId='827578673988-ujgqka0p0elabc06518o4skjeiu1grer.apps.googleusercontent.com'>
      <AuthContextComponent>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </AuthContextComponent>
    </GoogleOAuthProvider>
)
