import React from 'react';
import { Link } from 'react-router-dom';

function Header(){

  return (
    <div>
      <style jsx>{`
          h2 {
            text-align: center;
            font-family: comic sans-serif;
            font-weight: 500;
            font-size: 30px;
            background-color: brown;
            border-style: double;
            border-radius: 50%;
            width: 270px;
            padding: 12px;
            margin-bottom: 8px;
          }

          #links {
            text-align: center;
            font-size: 20px;
          }
          `}</style>
      <h2>Brewery Bro's</h2>
      <div id='links'>
        <Link to="/">Home</Link> | <Link to="/newbeer">Add Brew</Link>
      </div>
    </div>
  );
}

export default Header;
