import React from 'react';
import './UserImage.css';


const UserImage = (props) => {


    return (
        <span className='user-image' id={props.login}>
            {props.urlheader
                ? <div>image</div>
                : <div id={props.login}> <img src={props.avatar_url} /> </div>}

        </span>
    )
}

export default UserImage;