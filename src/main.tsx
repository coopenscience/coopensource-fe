import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import 'react-tooltip/dist/react-tooltip.css'
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthContextComponent from "./contexts/AuthContext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/feed",
    element: <h1>Feed papai</h1>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
    <GoogleOAuthProvider clientId='827578673988-ujgqka0p0elabc06518o4skjeiu1grer.apps.googleusercontent.com'>
      <AuthContextComponent>
        <React.StrictMode>
          <RouterProvider router={router} />
          {/* <App /> */}
        </React.StrictMode>
      </AuthContextComponent>
    </GoogleOAuthProvider>
)
