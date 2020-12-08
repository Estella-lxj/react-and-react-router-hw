import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import QuizList from './QuizList';
import QuizDetail from './QuizDetail';
import Login from './Login';

class OnlineQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: false
        }
    }

    handleAuth = () => {
        this.setState({ auth: !this.state.auth });
    }

    render() {

        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Quiz List</Link>
                            </li>
                            <li>
                                <Link to='login'>Log In</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/' exact render={() => <QuizList auth={this.state.auth} />} />
                        <Route
                            path='/login'
                            render={() => <Login auth={this.state.auth} handleAuth={this.handleAuth} />}
                        />
                        <Route path='/:problemId' render={() => <QuizDetail auth={this.state.auth} />} />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default OnlineQuiz;