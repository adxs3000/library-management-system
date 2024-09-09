

import React from 'react';
import { Link } from 'react-router-dom'; 

const Userpage = () => {
  return (
    <div className="bckgrd" style={{ backgroundImage: "url('library-background4.jpg')", height: '100%' }}>
      <div className="box" style={{ backgroundImage: 'none', width: '100%', height: '100%px', marginLeft: '60px', marginRight: '100px', border: 'none', boxShadow: 'none' }}>
        <div className="cards">
         
          <div className="card">
            <Link to="/createUser">
              <button className="button-style4" style={{ height: '100%' }}>
                <h2>Create User</h2>
              </button>
            </Link>
          </div>

          
          <div className="card">
            <Link to="/searchUser">
              <button className="button-style3" style={{ height: '100%' }}>
                <h2>Search User</h2>
              </button>
            </Link>
          </div>

          
          <div className="card" style={{ borderRadius: '65px' }}>
            <Link to="/usersList">
              <button className="button-style2" style={{ height: '100%' }}>
                <h2>Users List</h2>
              </button>
            </Link>
          </div>

         
          <div className="card">
            <Link to="/deleteUser">
              <button className="button-style1" style={{ height: '100%' }}>
                <h2>Delete User</h2>
              </button>
            </Link>
          </div>
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

export default Userpage;
