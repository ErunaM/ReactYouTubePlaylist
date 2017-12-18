import React, { Component } from 'react';

  //class component
class SearchBar extends Component{
  // Constructor
  constructor(props){
    super(props);
    // sets the state
    this.state = { term: '' }; // setup state

  }
  // renders the component
  render() {
    return (
      <div className="search-bar">
      <input
        value = {this.state.term} // sets the input value as the state.term.
         onChange={event =>  this.onInputChange(event.target.value)}

         // sets the state.term by the event value from the input
       />

    </div>
    );
  }

  onInputChange(term){

      this.setState({term});
      this.props.onSearchTermChange(term);

  }
}

export default SearchBar;
