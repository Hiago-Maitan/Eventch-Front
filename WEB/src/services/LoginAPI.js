import axios from 'axios';

const loginAPI = ({nome, senha}) => axios.get(`https://eventech-back.herokuapp.com/v2/login/${nome}/${senha}`);

const loginAPI2 = ({nome, senha}) => axios.get(`https://eventech-back.herokuapp.com/v2/login/empresa/${nome}/${senha}`);


export {loginAPI, loginAPI2};