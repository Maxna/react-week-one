import React from 'react';
import OnTap from './OnTap';


class BeerList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: []
    };
    this.handleSellingBeer = this.handleSellingBeer.bind(this);
  }

  handleSellingBeer(soldBeer){

  }

render(){
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
            `}</style>
          <div id="green">
        <OnTap
          title="Guinness --- Stout"
          msg="$5.00 Pints: 124"
          alc="ABV: 3.8%"/>
      </div>
      <div id='yellow'>
        <OnTap
          title="Newcastle --- Ale"
          msg="$4.00 Pints: 124"
          alc="ABV: 4.0%"/>
      </div>
      <div id='blue'>
        <OnTap
          title="Yuengling --- Lager"
          msg="$2.50 Pints: 124"
          alc="ABV: 2.5%"/>
      </div>
    </div>
  );
}

}

export default BeerList;
