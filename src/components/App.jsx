import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Greeting from './Greeting';
import Header from './Header';
import BeerList from './BeerList';


function App(){
  const main = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
    padding: '10px',
  };



  return (
    <div>
      <Greeting/>
      <Header/>
      <div style={main}>
        <Switch>
          <Route exact path='/' component={BeerList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
