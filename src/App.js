import './App.css';
import Router from './Router';

export function RequireAuth({ children }) {
    // Used to ensure the refreshToken is called once at a time
    const user = localStorage.getItem('tokenUser'); // TODO Get user from local storage

    if (user === null) {
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
        <RequireAuth />
        <Router />
      </div>
  );
}

export default App;
