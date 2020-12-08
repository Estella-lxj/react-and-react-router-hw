import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class QuizDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: {},
            answer: '',
            pass: null
        }
    }

    componentDidMount() {
        axios.get(`http://api.haochuan.io/oj/problems/${this.props.match.params.problemId}`)
            .then(res => this.setState({ detail: res.data.question }))
            .catch((e) => console.log(e))
    }

    handleInput = (e) => {
        this.setState({ answer: e.target.value })
    }

    handleAnswer = (e) => {
        e.preventDefault();
        let answerBody = false
        if (this.state.answer === 'true') answerBody = true
        axios.post(`http://api.haochuan.io/oj/problems/${this.props.match.params.problemId}/solution`,
            { answer: answerBody })
            .then(res => {
                this.setState({ pass: res.data.pass })
            }).catch((e) => console.log(e))
    }

    handleBack = () => {
        this.props.history.push('/')
    }

    render() {
        if (localStorage.getItem('authenticated') !== true) {
            this.props.history.push('/login')
        }
        const detail = this.state.detail;
        const answer = this.state.answer;
        const pass = this.state.pass;
        return (
            <div>
                <h2>{detail.title}</h2>
                <h2>{detail.content}</h2>
                <hr />
                <form onSubmit={this.handleAnswer}>
                    <label htmlFor='answer'>
                        Your answer:
                        <br />
                        <input
                            id='answer'
                            type='text'
                            placeholder="true/false"
                            onChange={this.handleInput}
                            value={answer}
                        />
                        <input type='submit' />
                    </label>
                </form>
                {pass &&
                    <p>{pass ? 'Correct' : 'Wrong'}</p>}
                <button onClick={this.handleBack}>Back</button>
            </div>
        )
    }
}

export default withRouter(QuizDetail)