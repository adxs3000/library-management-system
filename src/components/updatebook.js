import React, { useState } from 'react';

const UpdateBook = () => {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [totalCopies, setTotalCopies] = useState('');
    const [availableCopies, setAvailableCopies] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'isbn':
                setIsbn(value);
                break;
            case 'title':
                setTitle(value);
                break;
            case 'total_copies':
                setTotalCopies(value);
                break;
            case 'available_copies':
                setAvailableCopies(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            isbn: parseInt(isbn),
            title,
            total_copies: parseInt(totalCopies),
            available_copies: parseInt(availableCopies)
        };
        if (formData.isbn < 0 ){
            alert ("ISBN can not be in negative")
        }



        if(formData.total_copies < formData.available_copies){
            alert("Available copies cannot be greater than Total copies")
        }
        else{

        
        fetch('http://localhost:8000/admin/books/update', {
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
        .then(data => {
            console.log(data.available_copies)
            console.log(data.total_copies)
            
            alert('Book updated successfully!');
           
        })
        .catch(error => {
            console.error('Error updating book:', error);
            alert('Failed to update book. Please try again.');
        });
    }
    };

    return (
        <div className="container">
            <div className="form-box" style={{ height: '550px', boxShadow: '-3px 5px 25px rgba(255, 153, 0, 0.473)' }}>
                <h2 style={{ textAlign: 'center' }}>Update Book</h2>
                <form onSubmit={handleSubmit} id="updateBookForm">
                    <input
                        style={{ backgroundColor: 'rgba(255, 153, 0, 0.24)', margin: '10px' }}
                        type="text"
                        id="isbnInput"
                        name="isbn"
                        placeholder="ISBN"
                        value={isbn}
                        onChange={handleChange}
                        required
                    />

                    <input
                        style={{ backgroundColor: 'rgba(255, 153, 0, 0.24)', margin: '10px' }}
                        type="text"
                        id="titleInput"
                        name="title"
                        placeholder="Title"
                        value={title}
                        onChange={handleChange}
                        required
                    />

                    <input
                        style={{ backgroundColor: 'rgba(255, 153, 0, 0.24)', margin: '10px' }}
                        type="number"
                        id="totalCopiesInput"
                        name="total_copies"
                        placeholder="Total Copies"
                        value={totalCopies}
                        onChange={handleChange}
                        required
                    />

                    <input
                        style={{ backgroundColor: 'rgba(255, 153, 0, 0.24)', margin: '10px' }}
                        type="number"
                        id="availableCopiesInput"
                        name="available_copies"
                        placeholder="Available Copies"
                        value={availableCopies}
                        onChange={handleChange}
                        required
                    />
                    <div className="btn-field">
                        <button type="submit" style={{ backgroundColor: 'rgb(255, 153, 0)' }}>
                            Update Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateBook;
