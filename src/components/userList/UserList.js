import React, { useState, useEffect } from 'react';
import ListItem from './ListItem';
import "./UserList.css";
import axios from 'axios';



const UserList = () => {
    const [users, setUsers] = useState([]);
    const [login, setLogin] = useState('');
    const [detail, setDetail] = useState({});

    useEffect(async () => {
        const response = await axios('https://api.github.com/users?per_page=100',)
        setUsers(response.data);
    }, []);

    useEffect(async () => {
        const response = await axios(`https://api.github.com/users/${login}`,)
        setDetail(response.data);
    }, [login]);

    const handleClick = (e) => {
        // setDetail(e.target);
        setLogin(e.target.id);
    }


    return (
        <div className="list-details-container">
            <div className='user-container'>
                <h3>list</h3>
                <ListItem id="id" login='username' urlheader='image' />

                <div className='user-list' onClick={handleClick}>
                    {users.map((item) => {
                        return <ListItem key={item.id}  {...item} />
                    })}
                </div>
            </div>

            <div>
                <h3>detail</h3>
                <div className="details">
                    <ul>
                        <li>Name: {detail.login}</li>
                        <li>Live in: {detail.location}</li>
                        <li>Followers: {detail.followers}</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default UserList