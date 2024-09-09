import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api/api'; 

const LoginForm = () => {
  const history = useNavigate(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      alert("Please enter a valid email");
      return;
    }
    try {
      const response = await login(email, password);
      console.log(response); 

      
      if (response.role === 'user') {
        history('/userdashboard');
      } else if (response.role === 'admin') {
        history('/admindashboard');
      } else {
        setError('Invalid role. Please contact support.'); 
      }
    } catch (error) {
      console.error('Login failed:', error);
      setError('Invalid email or password. Please try again.'); 
    }
  };

  return (
    <div className="container" style={{backgroundColor: 'rgba(149, 204, 186, 0.692)'}}>
      <div className="box" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/login@4x.png)`, backgroundColor: 'aquamarine' }}>
        <h1>Login</h1>
      </div>
      <div className="form-box">
        <form onSubmit={handleSubmit}>
          <img className="image" src="3343652.webp" alt="Logo" />
          <div style={{marginTop:'50px'}}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <div className="btn-field">
            <button style={{backgroundColor: 'rgba(15, 211, 146, 0.473)'}} type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
