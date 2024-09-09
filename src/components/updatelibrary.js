import React, { useState } from 'react';

const UpdateLibrary = () => {
    const [name, setName] = useState('');
    const [updatedName, setUpdatedName] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            Name: name,
            Updated_name: updatedName
        };

        try {
            const response = await fetch('http://localhost:8000/admin/library/updatelibrary', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            alert('Library updated successfully!');
           
        } catch (error) {
            console.error('Error updating Library:', error);
            alert('Failed to update Library. Please try again.');
        }
    };

    return (
        <div className="container">
            <div className="form-box" style={{ height: '550px', boxShadow: '-3px 5px 25px rgba(255, 153, 0, 0.473)' }}>
                <h2 style={{ textAlign: 'center', paddingBottom: '30px' }}>Update Library</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        style={{ backgroundColor: 'rgba(255, 153, 0, 0.24)', margin: '10px', width: '300px', height: '50px', fontSize: '20px'}}
                        placeholder="Current Name" 
                        type="text" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required 
                    />
                    <input
                        style={{ backgroundColor: 'rgba(255, 153, 0, 0.24)', margin: '10px', width: '300px', height: '50px', fontSize: '20px' }}
                        placeholder="Updated Name" 
                        type="text" 
                        value={updatedName} 
                        onChange={(e) => setUpdatedName(e.target.value)} 
                        required 
                    />
                    <div className="btn-field">
                        <button type="submit" style={{ backgroundColor: 'rgb(255, 153, 0)', width: '300px', height: '50px', fontSize: '20px', marginRight: '20px' }}>
                            Update Library
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateLibrary;
