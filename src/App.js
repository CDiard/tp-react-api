import './App.css';
import './index.css';
import Router from './Router';
import { Navigate } from 'react-router-dom';
import React, {useState} from 'react';

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    const user = localStorage.getItem('tokenUser');

    if (user === null) {

        if (window.location.pathname !== "/login") {
            return <Navigate to="/login" replace={true} />;
        } else {
            return children;
        }
    } else {
        return children;
    }
}

function App() {

//Navigation dans requireAuth
  return (
      <div>
          <Router>
              <RequireAuth></RequireAuth>
          </Router>
      </div>
  );
}

export default App;
