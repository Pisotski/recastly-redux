import axios from 'axios';
import searchYouTube from '../lib/searchYouTube.js'; //why?
import changeVideoList from './videoList.js'; //why?
import changeVideo from './currentVideo.js'; //why?
import YOUTUBE_API_KEY from '../config/youtube.js';

const handleVideoSearch = (q) => {

  return (dispatch) => (
    searchYouTube({
      key: YOUTUBE_API_KEY,
      query: q,
    }, (videos) => {
      changeVideo(videos[0]);
      changeVideoList(videos);
    })
  );
};

export default handleVideoSearch;
