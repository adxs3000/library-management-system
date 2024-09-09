import React, { useState } from 'react';

const SearchUserList = () => {
    const [users, setUsers] = useState([]);
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(`http://localhost:8000/admin/searchuser?query=${encodeURIComponent(searchInput)}`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Error fetching user list:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSearch} style={{ display: 'flex', alignItems: 'center', marginTop: '50px' }}>
                <input
                   style={{
                    width: '80%',
                    height: '40px',
                    marginLeft:'100px',
                    borderRadius: '25px',
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(189, 182, 182, 0.418)',
                    fontSize: 'large',
                    paddingLeft: '15px', 
                    border: 'none', 
                }}
                type="text"
                placeholder="Search.."
                name="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
                style={{
                    width:'5%',
                    padding: '13px 18px',
                    marginLeft: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(189, 182, 182, 0.418)',
                    border: 'none', 
                    cursor: 'pointer', 
                }}
                type="submit"
            >
                    <i className="fa fa-search"></i>
                </button>
            </form>

            <h2 style={{ marginTop: '20px' }}>User List</h2>
            <table style={{ width: '100%', borderCollapse: 'collapse' , marginTop: '30px'}}>
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
                    {users.map((user, index) => (
                        <tr key={index}>
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

export default SearchUserList;
