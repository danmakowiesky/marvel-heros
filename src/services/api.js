import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com',
  params: {
    ts: '1',
    apikey: '38302dd10ce0a11616885d38419d4874',
    hash: '58f267e4a0baf59f49b4e567526ab043',
  },
});

export default api;
