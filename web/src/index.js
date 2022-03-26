import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AlertContextProvider } from './contexts/alert-context';
import { AuthContextProvider } from './contexts/auth-context';


ReactDOM.render(
  <React.StrictMode>
    <AlertContextProvider>
      <BrowserRouter>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </BrowserRouter>
    </AlertContextProvider>
  </React.StrictMode >,
  document.getElementById('root')
);



