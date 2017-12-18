import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyCvSLScbQHb32LR84YTlH8olG6sOGJcD0I';
//YTSearch from the youtube api


// Create a new component. It produces HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null


    };
    this.videoSearch('drama');
}

  videoSearch(term) {
    YTSearch({key: API_KEY, term}, (videos) => {
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
       }); // ES6 same name as state Therefore same as videos: videos
    });
  }

  //rendering SearchBar and VideoList- passing props to VideoList to use
  render() {

    //const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    const  videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);
    console.log(videoSearch);
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
           videos={this.state.videos}
           onVideoSelect={selectedVideo => this.setState({selectedVideo})}
         />
      </div>
    );
  }
}


//Take component's generated html and put it on page. (in DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
