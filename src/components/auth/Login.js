import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

const Login = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    useEffect((() => {
        if (props.auth) {
            props.history.push('/')
        }
    }), [])

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === 'u' && password === 'p') {
            props.authenticated();
            props.history.push('/list');
        } else {
            console.log('error')
        };
    };


    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">
                    username
                    <input type="text"
                        id='username'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br />
                <label htmlFor="password">
                    password
                    <input type="password"
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <input type="submit" />
            </form>

        </div>
    )
}

export default withRouter(Login);