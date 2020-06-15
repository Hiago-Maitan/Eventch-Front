import axios from 'axios'

const login = ({id}) => axios.post(`https://eventech.outsystemscloud.com/Core/rest/User/v1/${id}`)

const register = axios.create({
    baseURL:'https://eventech.outsystemscloud.com/Core/rest/User/v1'
});


export {login, register};