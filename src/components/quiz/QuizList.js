import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class QuizList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quizes: []
        }
    }

    componentDidMount() {
        axios.get("http://api.haochuan.io/oj/problems")
            .then(res => this.setState({ quizes: res.data.questions }))
            .catch((e) => console.log(e))
    }

    handleClick = (id) => {
        this.props.history.push(`/${id}`)
    }

    render() {
        if (localStorage.getItem('authenticated') !== "true") {
            this.props.history.push('/login')
        }
        const quizes = this.state.quizes
        return (
            <div>
                <h3>Quiz List</h3>
                <ul>
                    {quizes.map(({ id, title }) => {
                        return (
                            <li key={id}
                                onClick={() => { this.handleClick(id) }}>
                                {title}</li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

export default withRouter(QuizList)