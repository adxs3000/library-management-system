import React, { useState } from 'react';

const SearchRequestEvents = () => {
  const [searchInput, setSearchInput] = useState('');
  const [requestEvents, setRequestEvents] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    try {
      const url = `http://localhost:8000/admin/searchevents?query=${encodeURIComponent(searchInput)}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRequestEvents(data); 
    } catch (error) {
      console.error('Error fetching request events:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
      <input
                   style={{
                    width: '80%',
                    height: '40px',
                    marginLeft:'100px',
                    marginTop:'50px',
                    borderRadius: '25px',
                    backdropFilter: 'blur(20px)',
                    backgroundColor: 'rgba(189, 182, 182, 0.418)',
                    fontSize: 'large',
                    paddingLeft: '15px', 
                    border: 'none', 
                }}
                type="text"
                placeholder="Search.."
                name="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
                style={{
                    width:'5%',
                    padding: '13px 18px',
                    marginLeft: '10px', 
                    borderRadius: '10px',
                    backgroundColor: 'rgba(189, 182, 182, 0.418)',
                    border: 'none', 
                    cursor: 'pointer', 
                }}
                type="submit"
            >
          <i className="fa fa-search"></i>
        </button>
      </form>

      <h2 style={{ marginTop: '20px' }}>Request Events List</h2>
      <table id="userTable">
        <thead>
          <tr>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>BookID</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Reader ID</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Request Date</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Request Type</th>
          </tr>
        </thead>
        <tbody id="requestEventsTableBody">
          {requestEvents.map((event) => (
            <tr key={event.ID}>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{event.ID}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{event.bookid}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{event.readerid}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{event.requestdate}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{event.requesttype}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SearchRequestEvents;
