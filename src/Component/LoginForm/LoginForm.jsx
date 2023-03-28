// Genral imports
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import Input from '../Input/Input';

// Style imports
import './LoginForm.css';

const LoginForm = ({handleSubmit}) => {

    const [credentials, setCredentials] = useState({
        login: '',
        password: ''
    });

    const handleChange = ({key, value}) => {
        setCredentials((prevState) => {
            return {...prevState, [key]: value};
        });
    };

    const handleLoginChange = (event) => {
        handleChange({
            key: 'login',
            value: event.currentTarget.value
        });
    };

    const handlePasswordChange = (event) => {
        handleChange({
            key: 'password',
            value: event.currentTarget.value
        });
    };

    const handleSubmitForm = async(event) => {
        event.preventDefault();
        await handleSubmit(credentials);
    };
    //TODO Add Credentials Inputs (With Input Component)
    return (
        <>

            <form id="login-form" onSubmit={handleSubmitForm}>

                <div className='credentials-and-password-container'>
                    <Input
                        handleChange={handleLoginChange}
                        id={'login'}
                        type={'email'}
                        label={'Adresse e-mail : '}
                        placeholder={'Login'}
                        required={'required'}
                    />

                    <Input
                        handleChange={handlePasswordChange}
                        id={'password'}
                        type={'password'}
                        label={'Mot de passe : '}
                        placeholder={'Password'}
                        required={'required'}
                    />

                    <button
                        className='login-page-call-to-action'
                        type="submit"
                    >
                        Se connecter
                    </button>

                </div>
            </form>
        </>
    );
};

export default LoginForm;
