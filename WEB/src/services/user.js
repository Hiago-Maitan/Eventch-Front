//Conexão de Login Banco Outsystems

import axios from 'axios';

const login = ({email, password}) => axios.get(`https://eventech-back.herokuapp.com/v2/users/${email}/${password}`)

const register = axios.create({
    baseURL:'https://eventech-back.herokuapp.com/v2/users'
});


export {login, register};