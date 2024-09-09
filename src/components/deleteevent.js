import React, { useState } from 'react';

const DeleteEvent = () => {
  const [bookId, setBookId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      bookid: parseInt(bookId),
    };

    try {
      const response = await fetch('http://localhost:8000/admin/reqevent', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

       const data = await response.json();
       if (data.error != null){
        alert("Event Not found")
    }else{
        alert('Event deleted successfully!');
    }
        } catch (error) {
            console.error('Error deleting Event:', error);
            alert('Failed to delete Event. Please try again.');
        }
    };

  return (
    <div className="container">
      <div className="form-box" style={{ height: '500px', boxShadow: '-3px 5px 25px rgba(255, 0, 0, 0.664)' }}>
        <h2 style={{ textAlign: 'center' }}>Delete Event</h2>
        <form onSubmit={handleSubmit} id="deleteRequestEventForm">
          <input
            style={{
              backgroundColor: 'rgba(255, 0, 0, 0.37)',
              margin: '10px',
              marginTop: '90px',
            }}
            placeholder="Book ID"
            type="number"
            id="bookid"
            name="bookid"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
          />

          <div className="btn-field">
            <button type="submit" style={{ backgroundColor: 'rgba(255, 0, 0, 0.719)' }}>
              Delete Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteEvent;
