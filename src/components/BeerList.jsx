import React from 'react';
import OnTap from './OnTap';


function BeerList(){
  const beerList = {
    padding: '1px',
  };

  const green = {
    backgroundColor: '#28a745',
    width: '300px',
  };

  const yellow = {
    backgroundColor: '#ffc108',
    width: '300px',
  };

  const blue = {
    backgroundColor: '#17a2b8',
    width: '300px',
  };

  return (
    <div style={beerList}>
      <div style={green}>
        <OnTap
          title="Guinness --- Stout"
          msg="$5.00 Pints: 124"
          alc="ABV: 3.8%"/>
      </div>
      <div style={yellow}>
        <OnTap
          title="Newcastle --- Ale"
          msg="$4.00 Pints: 124"
          alc="ABV: 4.0%"/>
      </div>
      <div style={blue}>
        <OnTap
          title="Yuengling --- Lager"
          msg="$2.50 Pints: 124"
          alc="ABV: 2.5%"/>
      </div>
    </div>
  );
}

export default BeerList;
