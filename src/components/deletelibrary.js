import React, { useState } from 'react';

const DeleteLibrary = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = {
            name: name
        };

        try {
            const response = await fetch('http://localhost:8000/admin/deletelibrary', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (data.error != null){
                alert("Library Not found")
            }else{
                alert('Library deleted successfully!');
            }
        } catch (error) {
            console.error('Error deleting Library:', error);
            alert('Failed to delete library. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="form-box" style={{ height: '500px', boxShadow: '-3px 5px 25px rgba(255, 0, 0, 0.664)' }}>
                <h2 style={{ textAlign: 'center' }}>Delete Library</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        style={{ backgroundColor: 'rgba(255, 0, 0, 0.37)', margin: '10px', marginTop: '90px', width: '300px', height: '50px', fontSize: '20px' }}
                        placeholder="Name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <div className="btn-field">
                        <button type="submit" style={{ backgroundColor: 'rgba(255, 0, 0, 0.719)', width: '300px', height: '50px', fontSize: '20px', marginRight: '18px' }}>
                            Delete Library
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteLibrary;
