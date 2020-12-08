import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom'

const List = (props) => {

    const [users, setUsers] = useState([]);


    useEffect((() => {
        if (!props.auth) {
            props.history.push('/login')
        }
    }), [])

    useEffect((() => {
        axios.get('https://api.github.com/users?per_page=100')
            .then(res => {
                setUsers(res.data)
            }).catch(
                console.log()
            )
    }), []);

    const handleDetail = (username) => {
        props.history.push(`/list/${username}`)
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
        </div>
    )
}

export default withRouter(List);