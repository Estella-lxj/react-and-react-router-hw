import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Users = () => {

    const [users, setUsers] = useState([]);
    const [detail, setDetail] = useState();

    useEffect((() => {
        axios.get('https://api.github.com/users?per_page=100')
            .then(res => {
                setUsers(res.data)
            }).catch(
                console.log()
            )
    }), []);

    const handleDetail = (username) => {
        axios.get(`https://api.github.com/users/${username}`)
            .then(res => {
                setDetail(res.data)
            }).catch(
                console.log()
            );
    };


    return (
        <div>
            <h1>User List</h1>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>image</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(({ id, login, avatar_url }) => {
                        return (
                            <tr key={id} onClick={() => handleDetail(login)}>
                                <td>{id}</td>
                                <td>{login}</td>
                                <td><img src={avatar_url} alt={login} style={{ height: 50, width: 50 }} /></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div>
                <h1>Detail</h1>
                {detail && <ur>
                    <li>Name: {detail.name}</li>
                    <li>Live in: {detail.location}</li>
                    <li>Followers: {detail.followers}</li>
                </ur>}
            </div>
        </div>
    )
}

export default Users;