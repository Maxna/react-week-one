import React from 'react';
import Beer from './Beer';
import PropTypes from 'prop-types';


function BeerList(props){
  return (
    <div>
      <style jsx>{`
        div {
          padding: 1px;
        }

        #green {
          background-color: #28a745;
          width: 300px;
        }

        #yellow {
          background-color: #ffc108;
          width: 300px;
        }

        #blue {
          background-color: #17a2b8;
          width: 300px;
        }

        #newBeer {
          background-color: white;
          width: 300px;
        }
            `}</style>
      <div id="green">
        <Beer
          brand="Guinness"
          brew="Stout"
          price="5.00"
          pintCount="124"
          abv="ABV: 3.8"/>
      </div>
      <div id='yellow'>
        <Beer
          brand="Newcastle"
          brew="Ale"
          price="4.00"
          pintCount="124"
          abv="ABV: 4.0"/>
      </div>
      <div id='blue'>
        <Beer
          brand="Yuengling"
          brew="Lager"
          price="2.50"
          pintCount="124"
          abv="ABV: 2.5"/>
      </div>
      <div id='newBeer'>
        {props.beerList.map((beer) =>
          <Beer brand={beer.brand}
            brew={beer.brew}
            price={beer.price}
            pintCount={beer.pintCount}
            abv={beer.abv}
            key={beer.id}/>
        )}
      </div>
    </div>
  );
}

BeerList.propTypes={
  beerList: PropTypes.array
};

export default BeerList;
