import React from 'react';
import OnTap from './OnTap';


function BeerList(){
  const beerList = {
  };

  const green = {
    backgroundColor: 'green',
    width: '318px',
  };

  const yellow = {
    backgroundColor: 'yellow',
    width: '318px',
  };

  const blue = {
    backgroundColor: 'blue',
    width: '318px',
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
          alc="ABV: 2.5"/>
      </div>
    </div>
  );
}

export default BeerList;
