import axios from 'axios';

const regEventoAPI = axios.create({
	baseURL: 'https://eventech-back.herokuapp.com/v2/events',
});

export default regEventoAPI; 