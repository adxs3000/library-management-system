

import React, { useState } from 'react';
import { createBook } from '../api/api'; 
const CreateBook = () => {
    const [isbn, setIsbn] = useState('');
    const [libid, setLibid] = useState('');
    const [title, setTitle] = useState('');
    const [authors, setAuthors] = useState('');
    const [publisher, setPublisher] = useState('');
    const [version, setVersion] = useState('');
    const [totalCopies, setTotalCopies] = useState('');
    const [availableCopies, setAvailableCopies] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = {
            isbn: parseInt(isbn),
            libid: parseInt(libid),
            title,
            authors,
            publisher,
            version: parseInt(version),
            total_copies: parseInt(totalCopies),
            available_copies: parseInt(availableCopies)
        };

        try {
            const response = await createBook(formData);
            console.log(response);
            setMessage('Book Created successfully!');
           
            setIsbn('');
            setLibid('');
            setTitle('');
            setAuthors('');
            setPublisher('');
            setVersion('');
            setTotalCopies('');
            setAvailableCopies('');
        } catch (error) {
            console.error('Error creating book:', error);
            setMessage('Failed to create book. Please try again.');
        }
    };

    return (
        <div className="container" style={{backgroundImage: `url('pexels-photo-235985.jpeg')`, backgroundSize: 'cover'}}>
            <div className="box" style={{ backgroundImage: `url('old-books-436498_1280.jpg')` }}>
               
            </div>
            <div className="form-box" style={{ boxShadow: '-3px 5px 25px rgb(40, 41, 36)' }}>
                <form onSubmit={handleSubmit}>
                    <img style={{ marginLeft: '70px', borderRadius: '100px', backgroundColor: 'whitesmoke' }} className="image" src="bookicon1.png" alt="Book Icon" />
                    <div style={{ marginTop: '10px' }}>
                        <h2 style={{ textAlign: 'center' }}>Add Book</h2>
                        <div>
                            <input style={{ marginTop: '60px', backgroundColor: 'rgba(0, 0, 0, 0.315)' }} type="number" placeholder="ISBN" id="isbn" name="isbn" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
                            <input style={{ marginTop: '60px', backgroundColor: 'rgba(0, 0, 0, 0.315)' }} type="number" placeholder="LibId" id="libid" name="libid" value={libid} onChange={(e) => setLibid(e.target.value)} required />
                        </div>
                        <div>
                            <input style={{ marginTop: '60px', backgroundColor: 'rgba(0, 0, 0, 0.315)' }} type="text" placeholder="Title" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </div>
                        <input style={{ marginTop: '60px', backgroundColor: 'rgba(0, 0, 0, 0.315)' }} type="text" placeholder="Author" id="authors" name="authors" value={authors} onChange={(e) => setAuthors(e.target.value)} required />
                        <input style={{ marginTop: '60px', backgroundColor: 'rgba(0, 0, 0, 0.315)' }} type="text" placeholder="Publisher" id="publisher" name="publisher" value={publisher} onChange={(e) => setPublisher(e.target.value)} required />
                        <input style={{ marginTop: '60px', backgroundColor: 'rgba(0, 0, 0, 0.315)' }} type="number" placeholder="Version" id="version" name="version" value={version} onChange={(e) => setVersion(e.target.value)} required />
                        <input style={{ marginTop: '60px', backgroundColor: 'rgba(0, 0, 0, 0.315)' }} type="number" placeholder="Total Copies" id="total_copies" name="total_copies" value={totalCopies} onChange={(e) => setTotalCopies(e.target.value)} required />
                        <input style={{ marginTop: '60px', backgroundColor: 'rgba(0, 0, 0, 0.315)' }} type="number" placeholder="Available Copies" id="available_copies" name="available_copies" value={availableCopies} onChange={(e) => setAvailableCopies(e.target.value)} required />
                    </div>
                    <div className="btn-field">
                        <button style={{ backgroundColor: 'rgba(193, 154, 107, 0.884)' }} type="submit">Add Book</button>
                    </div>
                    <p>{message}</p>
                </form>
            </div>
        </div>
    );
};

export default CreateBook;
