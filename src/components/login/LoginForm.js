import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "" }
    }
    handleUsername = (e) => {
        this.setState({ username: e.target.value })
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const format = (d) => {
            let year = d.getFullYear();
            let month = d.getMonth() + 1;
            let date = d.getDate();
            let res = year.toString() + month.toString() + date.toString()
            return res
        }

        let today = new Date();
        let tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1)
        let yesterday = new Date();
        yesterday.setDate(today.getDate() - 1)

        if (this.state.username === "today" && this.state.password === format(today)) {
            this.setState({ isLogin: true })
        } else if (this.state.username === "yesterday" && this.state.password === format(yesterday)) {
            this.setState({ isLogin: true })
        } else if (this.state.username === "tomorrow" && this.state.password === format(tomorrow)) {
            this.setState({ isLogin: true })
        } else {
            alert('Wrong username or password!')
        }
        console.log(this.state.isLogin)

    }

    handleLogout = () => {
        this.setState({ isLogin: false })
    }

    render() {
        const { isLogin } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <lable for="username">
                        <input
                            id='username'
                            type='text'
                            placeholder="username"
                            onChange={this.handleUsername}
                            value={this.state.username}
                        />
                    </lable>
                    <br />

                    <lable>
                        <input
                            id="password"
                            type='password'
                            placeholder="password"
                            onChange={this.handlePassword}
                            value={this.state.password}
                        />
                    </lable>
                    <br />

                    <input type="submit" />
                </form>
                {isLogin ? (<div><h1>Welcome!
                    </h1>
                    <button onClick={this.handleLogout}>
                        Logout
                        </button>
                </div>) : null}

            </div>
        )
    }
}

export default Login;