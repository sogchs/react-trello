import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3001'
});

const getColumns = () => http.get('/columns').then(response => response.data);

const postCard = (card) => {
  const data = new FormData();
  Object.keys(card).forEach(key => {
    console.log(key, card[key]);
    data.append(key, card[key]);
  })

  return http.post('/cards', data);
}


const createColumn = (column) => http.post('/columns', column);

const deleteCard = (id) => http.delete(`/cards/${id}`);

const deleteColumn = (id) => http.delete(`/columns/${id}`);

export default {
  getColumns,
  postCard,
  createColumn,
  deleteCard,
  deleteColumn
};

