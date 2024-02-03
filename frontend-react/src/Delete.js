import React, { useState } from 'react';
import axios from 'axios';
import './Delete.css'
const Delete = () => {
  const [bookid, setBookid] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setBookid(event.target.value);
  };

  const handleDelete = () => {
    const url ='http://localhost:8080/book/'+ bookid;
    axios.delete(url)
    .then(response => {
      setMessage('Book data deleted successfully');
      // Handle any other logic after successful deletion if needed
    })
    .catch(error => {
      setMessage('Failed to delete book');
      // Handle error cases or show an error message to the user
    });
  };

  return (
    <div className="delete-book-container">
      <h2>Delete Book</h2>
      <label>
        Book ID:
        <input type="text" value={bookid} onChange={handleInputChange} />
      </label>
      <button onClick={handleDelete}>Delete book</button>
      <p>{message}</p>
    </div>
  );
};

export default Delete;
