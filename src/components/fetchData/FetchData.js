import { useState, useEffect } from 'react';
import axios from "axios";

const FetchData = () => {
    const [users, setUsers] = useState([]);
    const [details, setDetails] = useState({});

    const getUsers = () => {
        return axios('https://api.github.com/users?per_page=10')
            .then(res => setUsers(res.data))
    }

    const getUserDetais = (login) => {
        return axios(`https://api.github.com/users/${login}`)
            .then(res => setDetails(res.data))
    }

    useEffect((() => {
        getUsers();
    }), [])

    return (
        <div>
            <ul>
                {users.map(user => (
                    <li key={user.id} onClick={() => getUserDetais(user.login)}>{user.login}</li>
                ))}
            </ul>
            <div>
                <p>{details.login}</p>
                <p>{details.location}</p>
            </div>
        </div>
    )
}

export default FetchData;