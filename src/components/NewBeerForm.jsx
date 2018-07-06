import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewBeerForm(props){
  let _brand=null;
  let _brew=null;
  let _price=null;
  let _pintCount=null;
  let _abv=null;

  function handleNewBeerFormSubmission(event) {
    event.preventDefault();
    props.onNewBeerCreation({brand: _brand.value, brew: _brew.value, price: _price.value, pintCount: _pintCount.value, abv: _abv.value, id: v4()});
    _brand.value = '';
    _brew.value = '';
    _price.value = '';
    _pintCount.value = '';
    _abv.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewBeerFormSubmission}>
        <input
          type='text'
          id='brand'
          placeholder='Brand'
          ref={(input) => {_brand=input;}}/>
        <input
          type='text'
          id='brew'
          placeholder='Brew'
          ref={(input) => {_brew=input;}}/>
        <input
          type='text'
          id='price'
          placeholder='0.00'
          ref={(input) => {_price=input;}}/>
        <input
          type='text'
          id='pintCount'
          placeholder='Pints Remaining'
          ref={(input) => {_pintCount=input;}}/>
        <input
          type='text'
          id='abv'
          placeholder='0.0'
          ref={(input) => {_abv=input;}}/>
        <button type='submit'>Stock this Beer!</button>
      </form>
    </div>
  );
}

NewBeerForm.propTypes={
  onNewBeerCreation: PropTypes.func
};

export default NewBeerForm;
