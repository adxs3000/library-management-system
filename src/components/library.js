

import React from 'react';
import { Link } from 'react-router-dom'; 

const Library = () => {
  return (
    <div className="bckgrd" style={{ backgroundImage: "url('library-background4.jpg')", height: '100%' }}>
      <div className="box" style={{ backgroundImage: 'none', width: '100%', height: '100%px', marginLeft: '60px', marginRight: '100px', border: 'none', boxShadow: 'none' }}>
        <div className="cards">
         
          <div className="card">
            <Link to="/createLibrary">
              <button className="button-style4" style={{ height: '100%' }}>
                <h2>Create Library</h2>
              </button>
            </Link>
          </div>

         
          <div className="card">
            <Link to="/libraryList">
              <button className="button-style3" style={{ height: '100%' }}>
                <h2>Library List</h2>
              </button>
            </Link>
          </div>

          
          <div className="card" style={{ borderRadius: '65px' }}>
            <Link to="/updateLibrary">
              <button className="button-style2" style={{ height: '100%' }}>
                <h2>Update Library</h2>
              </button>
            </Link>
          </div>

          
          <div className="card">
            <Link to="/deleteLibrary">
              <button className="button-style1" style={{ height: '100%' }}>
                <h2>Delete Library</h2>
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

export default Library;
