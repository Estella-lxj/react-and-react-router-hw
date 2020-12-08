import React, { useState } from 'react';
import UserName from './UserName';
import UserId from './UserId';
import UserImage from './UserImage';



const ListItem = (props) => {


    return (
        <div className="item-container">
            <UserId  {...props} />
            <UserName {...props} />
            <UserImage {...props} urlheader={props.urlheader} />
        </div>
    )
}

export default ListItem;