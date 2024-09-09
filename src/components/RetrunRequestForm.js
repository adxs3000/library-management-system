import React, { useState } from 'react';
import {returnRequest} from '../api/api'; // Assuming you have an API function for issuing requests

function ReturnRequestForm() {
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
    const response = await returnRequest(title, email);
    console.log(response);
    alert("Return request successfully sent!")
    }catch (error){
      alert("error");
    }
  
  };

  return (
    <div className="bckgrd" style={{ backgroundColor: 'rgba(255, 255, 0, 0.384)' }}>
      <div className="container">
        <div className="box" style={{ backgroundImage: "url('pexels-photo.jpeg')" }}>
        </div>
        <div className="form-box" style={{ boxShadow: '-3px 5px 25px rgba(149, 69, 53, 0.616)' }}>
          <form id="createReturnForm" onSubmit={handleSubmit}>
            <img className="image" src="issueicon.png" alt="Issue Icon" />
            <div style={{ marginTop: '10px' }}>
              <div>
                <input
                  style={{ backgroundColor: 'rgba(255, 255, 0, 0.384)' }}
                  type="text"
                  placeholder="Title"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <input
                  style={{ backgroundColor: 'rgba(255, 255, 0, 0.384)' }}
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="btn-field">
                <button type="submit" style={{ backgroundColor: 'rgba(255, 255, 0, 0.534)' }}>Submit</button>
              </div>
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
}

export default ReturnRequestForm;



