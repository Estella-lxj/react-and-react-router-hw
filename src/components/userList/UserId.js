import React from 'react';
import './UserId.css';

const UserId = (props) => {

    return (
        <div className='user-id' id={props.login}>{props.id}</div>
    )
}

export default UserId;