import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Greeting from './Greeting';
import Header from './Header';
import BeerList from './BeerList';


function App(){

  return (
    <div>
      <Greeting/>
      <Header/>
      <div>
        <Switch>
          <Route exact path='/' component={BeerList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
