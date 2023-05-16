import LoginForm from "../../Component/LoginForm/LoginForm";
import {useState} from "react";


const LoginPage = () => {

    const [formSubmitting, setFormSubmitting] = useState(false);
    const handleSubmit = async (credentials) => {
        setFormSubmitting(true);
        try {
            //TODO Make Login call
            await fetch('http://127.0.0.1:8000/api/login_check', {
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: credentials.login,
                    password: credentials.password
                }),
                method: 'POST',
            }).then((response) => {
                if (!response.ok) {
                    switch (response.status) {
                        case 401:
                            return window.location = "/login";
                    }
                }
                return response.json();
            }).then(data => localStorage.setItem("tokenUser", data.token));

            //Redirect home page
            window.location.href = '/';

        } catch (error) {
            console.log(error);
            // message
        } finally {
            setFormSubmitting(false);
        }
    };

    return (
        <div>

            <LoginForm
                handleSubmit={handleSubmit}
            />

        </div>
    )
}

export default LoginPage;