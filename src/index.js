import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCvSLScbQHb32LR84YTlH8olG6sOGJcD0I';
//YTSearch from the youtube api
YTSearch({key: API_KEY, term: 'surfboards'}, function(data){
  console.log(data);
});

// Create a new component. It produces HTML
const App = () => {

  return (<div><SearchBar /></div>);

}


//Take component's generated html and put it on page. (in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
