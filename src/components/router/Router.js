import React from 'react';
import { Route, Link, Switch, BrowserRouter, wiouRoute } from 'react-router-dom';
import Home from './Home';
import Users from './Users';
import UserDetail from './UserDetail';


const Router = () => {

    return (
        <BrowserRouter>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="users">Users</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/users' exact component={Users} />
                    <Route path='/users/:login' component={UserDetail} />
                </Switch>
            </div>
        </BrowserRouter>

    )
}

export default Router;
