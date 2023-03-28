import './App.css';
import Router from './Router';
import { Navigate } from 'react-router-dom';

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    const user = localStorage.getItem('tokenUser'); // TODO Get user from local storage


    if (user === null) {
        // return <Navigate to="/login" />;

        if (window.location.pathname !== "/login") {
            //TODO Navigate to login
            window.location.href = '/login';
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
              <RequireAuth />
          </Router>
      </div>
  );
}

export default App;
