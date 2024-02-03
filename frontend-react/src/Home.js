import React from 'react';
import './Home.css'
const Home = () => {
  return (
    <div className="landing-page-container">
      <marquee> <h1>Welcome to the Book Store</h1> </marquee>
      <p>
        This system allows you to manage Books information efficiently. You can perform various actions such as inserting new Books, updating existing information, deleting Books, and alse view all the available books.
      </p>
      <p>
        Please use the navigation menu above to access different functionalities.
      </p>
    </div>
  );
};

export default Home;
