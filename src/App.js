import './App.css';
import Router from './Router';
import { Navigate } from 'react-router-dom';

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    const user = localStorage.getItem('tokenUser'); // TODO Get user from local storage


    if (user === null) {

        if (window.location.pathname !== "/login") {
            //TODO Navigate to login
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
