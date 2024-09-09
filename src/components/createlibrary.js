

import React, { useState } from 'react';
import { create_Library } from '../api/api'; 


const CreateLibrary = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await create_Library(name);
      console.log(response);
      setMessage("");
      alert("Library Created Successfully");
    } catch (error) {
      
      setMessage("");
      alert("Failed to create Library")
      console.error(error);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div className="bckgrd" style={{ backgroundImage: "url('library-background4.jpg')" }}>
      <div className="container">
        <div className="box" style={{ backgroundImage: "url('library-sub-bck.jpg')" }}>
       
        </div>
        <div className="form-box" style={{ boxShadow: '-3px 5px 25px rgb(40, 41, 36)' }}>
          <form id="createLibraryForm" onSubmit={handleSubmit}>
            <img className="image" src="add-library-icon.jpeg" alt="Library Icon" style={{ marginLeft: '70px', borderRadius: '100px' }} />
            <div style={{ marginTop: '10px' }}>
              <div>
                <input
                  type="text"
                  placeholder="Library Name"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleNameChange}
                  style={{ marginTop: '60px', backgroundColor: 'rgba(0, 0, 0, 0.315)', color: 'black' }}
                />
              </div>
            </div>
            <div className="btn-field">
              <button type="submit" style={{ backgroundColor: 'rgba(53, 49, 45, 0.459)' }}>
                Create Library
              </button>
              <p id="message">{message}</p> 
            </div>
          </form>
        </div>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
      </ul>
     
    </div>
  );
};

export default CreateLibrary;
