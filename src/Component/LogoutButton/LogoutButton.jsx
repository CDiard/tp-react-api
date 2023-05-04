import React from 'react';

function LogoutButton() {
    const handleLogout = () => {
        localStorage.removeItem("tokenUser");

        window.location.href = '/login';
    };

    return (
        <button onClick={handleLogout}>Déconnexion</button>
    );
}

export default LogoutButton;