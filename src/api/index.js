import axios from 'axios';
const mock = 'http://localhost:3001';

export default axios.create({
  baseURL: mock
});
