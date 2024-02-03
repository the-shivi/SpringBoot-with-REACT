import React, { useState } from 'react';
import axios from 'axios';
import './Update.css'

const Update = () => {
  const [bookid, setBookid] = useState('');
  const [bookname, setBookname] = useState('');
  const [author, setAuthor] = useState('');
  const [price, setPrice] = useState('');


  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    try {
      // Your API endpoint
      const apiUrl = 'http://localhost:8080/books';

      // Payload to be sent
      const payload = {
        bookid: bookid,
        bookname: bookname,
        autor: author,
        price: price,
      };

      // Making a PUT request using Axios
      const response = await axios.put(apiUrl, payload);
      
      // Check response status
      if (response.status === 200) {
        // Handle success scenario, e.g., show a success message
        console.log('Book Data updated successfully!');
        setMessage('Data Updated Successfuylly')
      }
    } catch (error) {
      // Handle error scenarios, e.g., show an error message
      console.error('Error updating Book:', error);
    }
  };

  return (
    
    <div className="update-book-container">
      <h2>Update Books</h2>
      <div>
        <label>
          Book ID:
          <input
            type="text"
            value={bookid}
            onChange={(e) => setBookid(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Book Name:
          <input
            type="text"
            value={bookname}
            onChange={(e) => setBookname(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Book Author:
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Book Price:
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
      </div>
      <button onClick={handleUpdate}>Update Book</button>
      <p>{message}</p>
    </div>
  );
};

export default Update;
