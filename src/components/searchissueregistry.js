import React, { useState } from 'react';

const SearchIssueRegistry = () => {
  const [searchInput, setSearchInput] = useState('');
  const [issueList, setIssueList] = useState([]);

  const handleSearch = async (event) => {
    event.preventDefault();
    
    try {
      const url = `http://localhost:8000/admin/searchissuelist?query=${encodeURIComponent(searchInput)}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setIssueList(data); // Assuming data is an array of issues
    } catch (error) {
      console.error('Error fetching issue list:', error);
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

      <h2 style={{ marginTop: '20px' }}>Issue Registry List</h2>
      <table id="userTable" style={{marginTop:'30px'}}>
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

export default SearchIssueRegistry;
