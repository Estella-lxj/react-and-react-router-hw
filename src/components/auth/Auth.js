import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import List from './List';
import Detail from './Detail';


const Auth = () => {
    const [auth, setAuth] = useState(false);

    const authenticated = () => {
        setAuth(true);
    };

    console.log(auth);

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/list'>UserList</Link></li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/' exact render={() => (
                        <Home auth={auth} />
                    )} />
                    <Route path='/login' render={() => (
                        <Login auth={auth} authenticated={authenticated} />
                    )} />
                    <Route path='/list' exact render={() => (
                        <List auth={auth} />
                    )} />
                    <Route path='/list/:userId' render={() => (
                        <Detail auth={auth} />
                    )} />
                </Switch>

            </div>
        </BrowserRouter>

    )
}

export default Auth;