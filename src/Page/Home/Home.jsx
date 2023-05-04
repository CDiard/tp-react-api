import LogoutButton from "../../Component/LogoutButton/LogoutButton";
import { Link } from "react-router-dom";

const HomePage = () => {


    return(
        <div>
            <h1>Home page</h1>
            <p>Bonjour, vous êtes connecté.</p>
            <LogoutButton />
            <Link to="/marvel">Page marvel</Link>
        </div>
    )
}

export default HomePage;