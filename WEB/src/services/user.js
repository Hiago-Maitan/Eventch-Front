import axios from 'axios'

const login = ({email, password}) => axios.post(`https://eventech.outsystemscloud.com/Core/rest/User/v1/${email}/${password}`)

const register = axios.create({
    baseURL:'https://eventech.outsystemscloud.com/Core/rest/User/v1'
});


export {login, register};