import React, { useState } from 'react';

const DeleteUser = () => {
    const [email, setEmail] = useState('');
    

    const handleDeleteUser = async (event) => {
        event.preventDefault();

        const formData = {
            email: email
        };

        try {
            const response = await fetch('http://localhost:8000/admin/deleteuser', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();
            if (data.error != null){
                alert("User Not found")
            }else{
                alert('User deleted successfully!');
            }
        } catch (error) {
            console.error('Error deleting User:', error);
            alert('Failed to delete User. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="box" style={{ backgroundColor: 'aquamarine', backgroundImage: 'url("skull-34133_1280.webp")' }}>
                
            </div>
            <div className="form-box" style={{ boxShadow: '-3px 5px 25px rgb(40, 41, 36)' }}>
                <form onSubmit={handleDeleteUser} id="deleteUserForm">
                    <img className="image" src="images.png" style={{ marginLeft: '70px', borderRadius: '30px' }} alt="User" />
                    <div style={{ marginTop: '10px' }}>
                        <input
                            style={{ marginTop: '60px', backgroundColor: 'rgba(0, 0, 0, 0.315)' }}
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div className="btn-field">
                            <button style={{ backgroundColor: 'rgba(180, 180, 48, 0.74)' }} type="submit">
                                Delete User
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <ul>
                <li>
                    <a href="http://localhost:8080/frontend/">Home</a>
                </li>
                <li>
                    <a href="#news">News</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
            </ul>
        </div>
    );
};

export default DeleteUser;
