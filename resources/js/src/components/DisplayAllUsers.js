import React, { useEffect, useState } from 'react';
import api from '../api';

function DisplayAllUsers() {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        api.getAllUsers().then(res => {
            const result = res.data;
            setUsers(result.data);
        });
    }, []);

    const RenderUsers = () => {
        if (!users) {
            return (
                <tr>
                    <td colSpan="4"> Chargement... </td>
                </tr>
            );
        }
        if (users.length === 0) {
            return (
                <tr>
                    <td colSpan="4"> Pas d'utilisateurs trouvés ! </td>
                </tr>
            );
        }
        return users.map((user) => (
            <tr>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
            </tr>
        ))
    };


    return (
        <div className="table-responsive">
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                     {RenderUsers()}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayAllUsers;