import axios from 'axios';

const loginAPI = ({nome, senha}) => axios.get(`https://eventech-back.herokuapp.com/v2/login/${nome}/${senha}`);

const loginAPI2 = ({empresa, senha}) => axios.get(`https://eventech-back.herokuapp.com/v2/login/empresa/${empresa}/${senha}`);


export default loginAPI;