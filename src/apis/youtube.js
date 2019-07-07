import axios from 'axios';

const KEY = 'AIzaSyDG6vu1azzD98uTlyVXZ9MAi9oCTRDl7Fc';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
   }
});