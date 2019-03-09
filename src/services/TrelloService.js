import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001'
});

const getColumns = () => http.get('/columns').then(response => response.data);

export  {
  getColumns
};
