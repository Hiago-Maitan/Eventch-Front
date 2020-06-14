import axios from 'axios';

const regEventoAPI = axios.create({
	baseURL: 'https://eventech-back.herokuapp.com/v2/events',
});

// const regCategoriaAPI = axios.create({
// 	baseURL: 'https://eventech-back.herokuapp.com/v2/categorys',
// });

export default regEventoAPI; //, regCategoriaAPI