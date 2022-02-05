import axios from 'axios';

const KEY = 'AIzaSyDJSaZ4g_rrydOw7YbF_uf4X6cVwWbq8D0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    type: 'video',
    key: KEY,
  },
});
