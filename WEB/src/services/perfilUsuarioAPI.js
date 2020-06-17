import axios from 'axios';

const perfilUsuarioAPI = ({userId}) => axios.get(`https://eventech-back.herokuapp.com/v2/users/UserJPA/${userId}`);

const perfilEmpresaAPI = ({nome, senha}) => axios.get(`https://eventech-back.herokuapp.com/v2/login/empresa/${nome}/${senha}`);


export {perfilUsuarioAPI, perfilEmpresaAPI};