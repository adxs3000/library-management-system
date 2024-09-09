import React, { useState, useEffect } from 'react';

const LibraryList = () => {
    const [libraryList, setLibraryList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/admin/getlibrary')
            .then(response => response.json())
            .then(data => {
                setLibraryList(data); 
            })
            .catch(error => {
                console.error('Error fetching library List:', error);
            });
    }, []); 

    return (
        <div>
            <h2>Library List</h2>
            <table>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {libraryList.map(lib => (
                        <tr key={lib.ID}>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{lib.ID}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{lib.Name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LibraryList;
