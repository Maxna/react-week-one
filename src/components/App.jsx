import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Greeting from './Greeting';
import Header from './Header';
import BeerList from './BeerList';
import NewBeerControl from './NewBeerControl';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterBeerList: []
    };
    this.handleAddingNewBeerToList = this.handleAddingNewBeerToList.bind(this);
  }

  handleAddingNewBeerToList(newBeer){
    var newMasterBeerList = this.state.masterBeerList.slice();
    newMasterBeerList.push(newBeer);
    this.setState({masterBeerList: newMasterBeerList});
  }

  render(){
    return (
      <div>
        <Greeting/>
        <Header/>
        <div>
          <Switch>
            <Route exact path='/' render={()=><BeerList beerList={this.state.masterBeerList} />} />
            <Route path='/newbeer' render={()=><NewBeerControl onNewBeerCreation={this.handleAddingNewBeerToList} />} />
            <Route component={Error404} />
          </Switch>
        </div>
      </div>
    );
  }

}

export default App;
