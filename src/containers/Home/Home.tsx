import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div className="m-2">
      <h2 className="text-center">The best company ever</h2>
      <p className="text-center">We will make your events unforgettable!</p>
      <div className="text-center">
        <Link to="contacts" className="btn btn-primary">Contact us!</Link>
      </div>
    </div>
  );
};

export default Home;