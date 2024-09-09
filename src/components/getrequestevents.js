import React, { useState, useEffect } from 'react';

const RequestEventsList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('http://localhost:8000/admin/requestevents')
      .then(response => response.json())
      .then(data => {
        setRequests(data); 
      })
      .catch(error => {
        console.error('Error fetching Request Events:', error);
      });
  };

  return (
    <div>
      <h2>Request Events List</h2>
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
        <tbody id="requestTableBody">
          {requests.map(request => (
            <tr key={request.ID}>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{request.ID}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{request.bookid}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{request.readerid}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{request.requestdate}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{request.requesttype}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestEventsList;
