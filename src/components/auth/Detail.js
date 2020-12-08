import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

const Detail = ({ history, match }) => {

    const [detail, setDetail] = useState({});

    useEffect((() => {
        axios.get(`https://api.github.com/users/${match.params.userId}`)
            .then(res => {
                setDetail(res.data);
                console.log(detail)
            }).catch(
                console.log()
            );
    }), []);

    const handleBack = () => {
        history.push('/list')
    };



    return (
        <div>
            <ul>
                <li>Name: {detail.name}</li>
                <li>Location: {detail.location}</li>
                <li>Followers: {detail.followers}</li>
            </ul>
            <button onClick={handleBack}>Back</button>
        </div>

    )
}

export default withRouter(Detail);