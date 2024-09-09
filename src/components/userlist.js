import React, { useState, useEffect } from 'react';

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/admin/users')
            .then(response => response.json())
            .then(usersData => {
                setUsers(usersData);
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []);

    return (
        <div>
            <h2 style={{marginTop: '30px'}}>User List</h2>
            <table style={{marginTop:'30px'}}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Name</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Email</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Contact Number</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Role</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Library ID</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{user.name}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{user.email}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{user.contact_number}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{user.role}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{user.libid}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
