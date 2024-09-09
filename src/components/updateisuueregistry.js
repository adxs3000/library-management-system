import React, { useState, useEffect } from 'react';

const UpdateIssueRegistry = () => {
  const [issueList, setIssueList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/admin/issuelist')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(issuelist => {
        setIssueList(issuelist);
      })
      .catch(error => {
        console.error('Error fetching Issue List:', error);
      });
  }, []);

  const updateIssueStatus = (title, email, status) => {
    const formData = {
      title: title,
      email: email,
      issue_status: status
    };

    fetch('http://localhost:8000/admin/requestaction', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(updatedIssue => {
      alert(`Issue status updated to ${status} successfully!`);
      
    })
    .catch(error => {
      console.error('Error updating issue status:', error);
      alert('Failed to update issue status. Please try again.');
    });
  };

  return (
    <div>
      <h2 style={{marginTop:'30px'}}>Issue Registry List</h2>
      <table id="issueTable" style={{marginTop:'30px'}}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Title</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Book ID</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Issue ID</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Reader ID</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Issue Date</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Issue Status</th>
            <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {issueList.map(issue => (
            <tr key={issue.ID}>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.ID}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.title}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.isbn}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.issueid}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.readerid}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.issuedate}</td>
              <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{issue.issue_status}</td>
              <td className="action-buttons" style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>
                <button onClick={() => updateIssueStatus(issue.title, issue.email, 'accepted')}>Accept</button>
                <button onClick={() => updateIssueStatus(issue.title, issue.email, 'rejected')}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpdateIssueRegistry;
