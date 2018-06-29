import React from 'react';
import OnTap from './OnTap';


function BeerList(){
  const beerList = {
    fontFamily: 'sans-serif',
    border: '2px solid #ccc'
  };

  return (
    <div style={beerList}>
      <OnTap
        title=""
        msg=""/>
      <OnTap
        title=""
        msg=""/>
      <OnTap
        title=""
        msg=""/>
    </div>
  );
}

export default BeerList;
