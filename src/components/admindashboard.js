

import React from 'react';
import { Link } from 'react-router-dom'; 

const AdminDashboard = () => {
  return (
    <div className="bckgrd" style={{ backgroundImage: "url('library-background4.jpg')", backgroundSize: 'cover',height: '100%' }}>
      <div className="box" style={{ backgroundImage: 'none', width: '100%', height: '100%px', marginLeft: '60px', marginRight: '100px', border: 'none', boxShadow: 'none' }}>

       
        <Link to="/library" className="button">
          <button style={{ backgroundImage: "url('book-front.webp')", backgroundSize: 'cover', width: '380px', height: '350px', marginLeft: '100px', marginBottom: '100%', marginTop: '100px' }}>
            <h1 style={{ fontSize: '4em' }}>Library</h1>
          </button>
        </Link>

        
        <Link to="/users_page" className="button">
          <button style={{ backgroundImage: "url('retunbook.webp')", backgroundSize: 'cover', width: '380px', height: '350px', marginLeft: '140px', marginTop: '0px', marginBottom: '370px' }}>
            <h1 style={{ fontSize: '4em' }}>Users</h1>
          </button>
        </Link>

       
        <Link to="/books" className="button">
          <button style={{ backgroundImage: "url('book-front.webp')", backgroundSize: 'cover', width: '380px', height: '350px', marginLeft: '100px', marginBottom: '100%', marginTop: '100px' }}>
            <h1 style={{ fontSize: '4em' }}>Books</h1>
          </button>
        </Link>

        
        <Link to="/request_events" className="button">
          <button style={{ backgroundImage: "url('book-front.webp')", backgroundSize: 'cover', width: '380px', height: '350px', marginLeft: '-1150px', marginRight: '100%', marginBottom: '0', marginTop: '400px' }}>
            <h1 style={{ fontSize: '4em' }}>Request Events</h1>
          </button>
        </Link>

        
        <Link to="/issue_registry" className="button">
          <button style={{ backgroundImage: "url('book-front.webp')", backgroundSize: 'cover', width: '380px', height: '350px', marginLeft: '-550px', marginRight: '100%', marginBottom: '0', marginTop: '400px' }}>
            <h1 style={{ fontSize: '4em' }}>Issue Registry</h1>
          </button>
        </Link>

      </div>

      
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#about">About</a></li>
        <li><h1 style={{ marginLeft: '320px', marginTop: '-10px', marginBottom: '0px', fontSize: '4em' }}>Admin Dashboard</h1></li>
      </ul>

    </div>
  );
};

export default AdminDashboard;
