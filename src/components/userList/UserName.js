import React from 'react';
import './UserName.css';


const UserName = (props) => {
    const style = {
        'margin': '10px 10px'
    }

    return (
        <div className="user-name" id={props.login}>{props.login}</div>
    )
}

export default UserName;