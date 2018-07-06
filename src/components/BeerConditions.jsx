import React from 'react';
import PropTypes from 'prop-types';

function BeerConditions(props){
  return (
    <div>
      <p>Select an action</p>
      <button onClick={props.onBeerFormConfirmation}>Stock</button>
    </div>
  );
}

BeerConditions.propTypes = {
  onBeerFormConfirmation: PropTypes.func
};

export default BeerConditions;
