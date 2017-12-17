import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
 const videoItems = props.videos.map((video) => {
   console.log(video.snippet.title);
    return <VideoListItem
      onVideoSelected={props.onVideoSelect}
      key={video.etag}
       video={video}
     />
  });


  return(
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;
