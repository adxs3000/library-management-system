

import React, { useState } from 'react';
import { createUser } from '../api/api'; 
import { useNavigate } from "react-router-dom";

const Home = () => {
  const history = useNavigate(); 

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Please enter a valid email");
      return;
    }

    try {
      const response = await createUser(name, email, password, parseInt(contactNumber), role);
      if (response == null){
        console.log('Unable to create user');
      }
      else{
      alert("User Successfully Created!");
      history('/login'); 
      }

      
      setName('');
      setEmail('');
      setPassword('');
      setContactNumber('');
      setRole('user');
    } catch (error) {
      console.error('Error creating user:', error);  
    }
  };

  return (
    <div className="bckgrd" style={{backgroundColor: 'whitesmoke'}}>
      <div className="container">
        <div className="box" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/book.jpg)` }}>
          <h1 data-shadow="dang!">Welcome!</h1>
        </div>
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <img className="image" src="greenicon.png" alt="icon" />
            <div style={{ marginTop: '10px' }}>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              /><br /><br />
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              /><br /><br />
              <input
                type="password"
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              /><br /><br />
              <input
                type="number"
                placeholder="Contact Number"
                id="contact_no"
                name="contact_no"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required
              /><br /><br />
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
              >
                <option value="user">User</option>
                <option value="admin" disabled>Admin</option>
              </select><br /><br />
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
