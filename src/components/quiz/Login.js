import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }



    handleLogin = (e) => {
        e.preventDefault();
        axios.post('http://api.haochuan.io/login', { username: this.state.username, password: this.state.password })
            .then(console.log(this.props.auth))
            .then(res => {
                if (res.status === 200) this.props.handleAuth();
                this.props.history.push('/')
            }).then(
                () => {
                    localStorage.setItem('authenticated', true);
                }
            )
            .catch((e) => console.log(e))
    }


    render() {

        if (localStorage.getItem('authenticated') === "true") {
            this.props.history.push('/')
        }
        return (
            <div>
                <form onSubmit={this.handleLogin}>
                    <label>
                        username:
                        <input
                            id='username'
                            type='text'
                            value={this.state.username}
                            onChange={(e) => this.setState({ username: e.target.value })}
                        />
                    </label>
                    <br />
                    <label>
                        password:
                        <input
                            id='password'
                            type='password'
                            value={this.state.password}
                            onChange={(e) => this.setState({ password: e.target.value })}
                        />
                    </label>
                    <br />
                    <input type='submit' />
                </form>
            </div>
        )
    }
}

export default withRouter(Login)