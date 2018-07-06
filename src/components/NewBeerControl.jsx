import React from 'react';
import NewBeerForm from './NewBeerForm';
import BeerConditions from './BeerConditions';
import PropTypes from 'prop-types';

class NewBeerControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleBeerFormConfirmation=this.handleBeerFormConfirmation.bind(this);
  }

  handleBeerFormConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent=null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent=<NewBeerForm onNewBeerCreation={this.props.onNewBeerCreation}/>;
    } else {
      currentlyVisibleContent=<BeerConditions onBeerFormConfirmation={this.handleBeerFormConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewBeerControl.propTypes={
  onNewBeerCreation: PropTypes.func
};

export default NewBeerControl;
