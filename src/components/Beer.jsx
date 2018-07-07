import React from 'react';
import PropTypes from 'prop-types';

function Beer(props){

  return (
    <div>
      <style jsx>{`
        #beer {
          border: thick ridge navy;
          background-color: white;
          marginBottom: 8px;
          width: 285px;
          fontSize: 24px;
          fontFamily: comic;
          fontWeight: bold;
          paddingLeft: 5px;
        };

        .p {
          margin: 5px;
        };

        #flex {
          display: flex;
        };

        .button {
          fontFamily: serif;
          fontSize: 25px;
        };

            `}</style>
      <div id='beer'>
        <p>{props.brand} --- {props.brew}</p>
        <p>${props.price} Pints: {props.pintCount}</p>
        <div id='flex'>
          <p>{props.abv}%</p>
          <button>Sell a Pint!</button>
        </div>
      </div>
    </div>
  );
}

Beer.propTypes = {
  brand: PropTypes.string.isRequired,
  brew: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pintCount: PropTypes.string.isRequired,
  abv: PropTypes.string.isRequired
};

export default Beer;
