import React, { useState } from 'react';

const DeleteRegistry = () => {
  const [bookId, setBookId] = useState('');

  const handleSubmit =  async (event) => {
    event.preventDefault();

    const formData = {
      bookid: bookId
    };

    try {
      const response = await fetch('http://localhost:8000/admin/deleteissuelist', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await response.json();
    if (data.error != null){
      alert("Registry Not found")
  }else{
      alert('Registry deleted successfully!');
  }
        } catch (error) {
            console.error('Error deleting Registry:', error);
            alert('Failed to delete Registry. Please try again.');
        }
    };

  return (
    <div style={{ backgroundImage: "url('library-background4.jpg')", backgroundSize: 'cover' }}>
      <div className="container">
        <div className="form-box" style={{ height: '500px', boxShadow: '-3px 5px 25px rgba(255, 0, 0, 0.664)' }}>
          <h2 style={{ textAlign: 'center' }}>Delete Event</h2>
          <form onSubmit={handleSubmit}>
            <input
              style={{ backgroundColor: 'rgba(255, 0, 0, 0.37)', margin: '10px', marginTop: '90px', height: '40px', borderRadius: '5px', fontSize: 'large' }}
              placeholder="Book ID"
              type="number"
              id="isbn"
              name="isbn"
              required
              value={bookId}
              onChange={(e) => setBookId(e.target.value)}
            />
            <div className="btn-field">
              <button type="submit" value="Delete Registry" style={{ backgroundColor: 'rgba(255, 0, 0, 0.719)', cursor: 'pointer' }}> Delete Registry</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteRegistry;
