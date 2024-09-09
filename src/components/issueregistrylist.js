import React, { useState, useEffect } from 'react';

const IssueList = () => {
  const [issueList, setIssueList] = useState([]);

  useEffect(() => {
    const fetchIssueList = async () => {
      try {
        const response = await fetch('http://localhost:8000/admin/issuelist');
        if (!response.ok) {
          throw new Error('Failed to fetch issue list');
        }
        const data = await response.json();
        setIssueList(data); 
      } catch (error) {
        console.error('Error fetching Issue List:', error);
      }
    };

    fetchIssueList();
  }, []); 

  return (
    <div>
      <h2 style={{marginTop:'30px'}}>Issue Registry List</h2>
      <table id='userTable' style={{ width: '100%', borderCollapse: 'collapse', marginTop: '30px' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Title</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Book ID</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Issue ID</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Reader ID</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Issue Date</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Issue Status</th>
          </tr>
        </thead>
        <tbody>
          {issueList.map((issue) => (
            <tr key={issue.ID}>
             <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.ID}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.title}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.isbn}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.issueid}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.readerid}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.issuedate}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.issue_status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default IssueList;
