import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333',
});
// 192.168.1.4
// 172.17.0.1
// 10.0.2.2

export default api;
