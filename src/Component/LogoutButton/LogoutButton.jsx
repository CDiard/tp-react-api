import React from 'react';
import {useNavigate} from "react-router-dom";

function LogoutButton() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem("tokenUser");

        return navigate("/login");
    };

    return (
        <button onClick={handleLogout}>Déconnexion</button>
    );
}

export default LogoutButton;