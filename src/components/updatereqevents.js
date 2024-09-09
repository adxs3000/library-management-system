import React, { useState } from 'react';

const UpdateLibraryForm = () => {
  const [bookId, setBookId] = useState('');
  const [readerId, setReaderId] = useState('');
  const [updatedBookId, setUpdatedBookId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        BookID: bookId,
        ReaderID: readerId,
        UpdatedBookID: updatedBookId,
      };

      const response = await fetch('http://localhost:8000/admin/updatereqevent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update Request Event');
      }

      const data = await response.json();
      alert('Event updated successfully!');
      console.log('Updated Request Event:', data);

     
      setBookId('');
      setReaderId('');
      setUpdatedBookId('');
    } catch (error) {
      console.error('Error updating Request Event:', error);
      alert('Failed to update Request Event. Please try again.');
    }
  };

  return (
    <div className="container">
      <div className="form-box" style={{ height: '550px', boxShadow: '-3px 5px 25px rgba(255, 153, 0, 0.473)' }}>
        <h2 style={{ textAlign: 'center', paddingBottom: '30px' }}>Update Request Event</h2>
        <form onSubmit={handleSubmit} id="updateRequestForm">
          <input
            style={{ backgroundColor: 'rgba(255, 153, 0, 0.24)', margin: '10px' }}
            placeholder="Current BookID"
            type="text"
            id="bookid"
            name="bookid"
            value={bookId}
            onChange={(e) => setBookId(e.target.value)}
            required
          />

          <input
            style={{ backgroundColor: 'rgba(255, 153, 0, 0.24)', margin: '10px' }}
            placeholder="Reader ID"
            type="text"
            id="readerid"
            name="readerid"
            value={readerId}
            onChange={(e) => setReaderId(e.target.value)}
            required
          />

          <input
            style={{ backgroundColor: 'rgba(255, 153, 0, 0.24)', margin: '10px' }}
            placeholder="Updated BookID"
            type="text"
            id="updated_bookid"
            name="updated_bookid"
            value={updatedBookId}
            onChange={(e) => setUpdatedBookId(e.target.value)}
            required
          />

          <div className="btn-field">
            <button type="submit" style={{ backgroundColor: 'rgb(255, 153, 0)' }}>
              Update Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateLibraryForm;
