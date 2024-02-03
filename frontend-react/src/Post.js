import React, { useState } from 'react';
import axios from 'axios';
import './Post.css'

const Post = () => {
  const [book, setBook] = useState({
    bookid: '',
    bookname: '',
    author: '',
    price: '',
  });
  //Setting error for input only numbers
  const [errors, setErrors] = useState({
    bookid: '',
    price: '',
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    let errorMessage = '';

    if (name === 'bookid' && !/^\d+$/.test(value)) {
      errorMessage = 'Book ID should be numeric with no spaces';
    }

    if (name === 'price' && !/^\d+$/.test(value)) {
      errorMessage = 'Price should be numeric only with no spaces';
    }

    setErrors({ ...errors, [name]: errorMessage });
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/books', book);
      console.log('Book Details inserted:', response.data);
      setMessage('Book Details Inserted Successfully')
      // You can add further logic here like displaying a success message
    } catch (error) {
      console.error('Error inserting employee:', error);
      // Handle error scenarios here
    }
  };

  return (
    <div className="insert-book-container">
      <h2>Insert Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">Book ID:</label>
          <input
            type="text"
            id="id"
            name="bookid"
            value={book.bookid}
            onChange={handleInputChange}
          />
          {errors.bookid && <h6 style={{ color: 'red' }}>{errors.bookid}</h6>}
        </div>
        <div>
          <label htmlFor="name">Book Name:</label>
          <input
            type="text"
            id="name"
            name="bookname"
            value={book.bookname}
            onChange={handleInputChange}
          />
          {errors.name && <h6 style={{ color: 'red' }}>{errors.name}</h6>}
        </div>
        <div>
          <label htmlFor="author">Book Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={book.author}
            onChange={handleInputChange}
          />
          {errors.author && <h6 style={{ color: 'red' }}>{errors.author}</h6>}
        </div>
        <div>
          <label htmlFor="price">Book Price:</label>
          <input
            type="text"
            id="price"
            name="price"
            value={book.price}
            onChange={handleInputChange}
          />
          {errors.price && <h6 style={{ color: 'red' }}>{errors.price}</h6>}
        </div>
        <button type="submit">Insert Book Data</button>
      </form>
      <p>{message}</p>
    </div>
  );
};


export default Post;
