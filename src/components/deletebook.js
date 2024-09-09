import React, { useState } from 'react';

const DeleteBook = () => {
    const [isbn, setIsbn] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const bookId = parseInt(isbn);
        if (bookId < 0) {
            alert('ISBN cannot be negative');
            return;
        };

        const formData = {
            isbn: bookId
        };

        try {
            
            const response = await fetch('http://localhost:8000/admin/books/delete', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
            const data = await response.json();
            if (data.error != null){
                alert("Book Not found")
            }else{
                alert('Book deleted successfully!');
            }
        } catch (error) {
            console.error('Error deleting Book:', error);
            alert('Failed to delete Book. Please try again.');
        }
    };

    

    return (
        <div className="container">
            <div className="form-box" style={{ height: '500px', boxShadow: '-3px 5px 25px rgba(255, 0, 0, 0.664)' }}>
                <h2 style={{ textAlign: 'center' }}>Delete Book</h2>
                <form onSubmit={handleSubmit} id="deleteBookForm">
                    <input
                        style={{ backgroundColor: 'rgba(255, 0, 0, 0.37)', margin: '10px', marginTop: '90px' }}
                        placeholder="ISBN"
                        type="number"
                        id="isbnInput"
                        name="isbn"
                        value={isbn}
                        onChange={(e) => setIsbn(e.target.value)}
                        required
                    />
                    <div className="btn-field">
                        <button type="submit" style={{ backgroundColor: 'rgba(255, 0, 0, 0.719)' }}>
                            Delete Book
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default DeleteBook;
