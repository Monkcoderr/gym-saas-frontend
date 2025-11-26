import { StrictMode } from 'react'
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import HomePage from './pages/HomePage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Login from './components/Login.jsx';
import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';

const router = createBrowserRouter([
  {
    path : '/',
    element : <App/>,
    
    children : [
      {
        index : 'true',
        element : <HomePage/> 
      },

      {
        path : 'login',
        element :<Login/>
      },

    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> 
      <RouterProvider router={router}/>
      </AuthProvider>
    
    
  </StrictMode>
)
