import React, { useEffect, useState } from 'react';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = async () => {
        try {
            const response = await fetch('http://localhost:8000/admin/books');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setBooks(data); 
        } catch (error) {
            console.error('Error fetching Books List:', error);
        }
    };

    return (
        <div>
            <h2>Book List</h2>
            <table id="bookTable">
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>ID</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>ISBN</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Title</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Author</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Publisher</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Version</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Total Copies</th>
                        <th style={{ border: '1px solid #dddddd', backgroundColor: '#f2f2f2', textAlign: 'left', padding: '8px' }}>Available Copies</th>
                    </tr>
                </thead>
                <tbody id="bookTableBody">
                    {books.map(book => (
                        <tr key={book.ID}>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{book.ID}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{book.isbn}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{book.title}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{book.authors}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{book.publisher}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{book.version}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{book.total_copies}</td>
                            <td style={{ border: '1px solid #dddddd', textAlign: 'left', padding: '8px' }}>{book.available_copies}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default BookList;
