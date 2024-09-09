import React from 'react';
import { Link } from 'react-router-dom'; 

const UserDashboard = () => {
  return (
    <div className="bckgrd" style={{ backgroundImage: "url('library-background4.jpg')", height: '100%' }}>
      
      <div className="box" style={{ backgroundImage: 'none', width: '100%', height: '100%px', marginLeft: '60px', marginRight: '100px', border: 'none', boxShadow: 'none' }}>
        <Link to="/issue_request">
          <button style={{ backgroundImage: "url('book-front.webp')", backgroundSize: 'cover', width: '480px', height: '600px', marginLeft: '190px', marginTop: '80px', backgroundColor: 'transparent' }}>
            <h1 style={{ fontSize: '6em', marginRight: '50px' }}>Issue Book</h1>
          </button>
        </Link>

        <Link to="/return_request">
          <button style={{ backgroundImage: "url('retunbook.webp')", backgroundSize: 'cover', width: '480px', height: '600px', marginLeft: '450px', marginRight: '100px', marginTop: '80px', backgroundColor: 'transparent' }}>
            <h1 style={{ fontSize: '6em', marginRight: '50px' }}>Return Book</h1>
          </button>
        </Link>
      </div>

     
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="/bookList">Books List</a></li>
        <li><h1 style={{ marginLeft: '320px', marginTop: '0px', fontSize: '6em', marginBottom: '0' }}>User Dashboard</h1></li>
        <li style={{ float: 'right' }}><Link to="/logout" id="logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default UserDashboard;
