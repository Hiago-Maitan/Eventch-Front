import axios from 'axios';

const regCategoriaAPI = axios.create({
	baseURL: 'https://eventech-back.herokuapp.com/v2/categorys',
});

export default regCategoriaAPI;