import axios from 'axios'

const login = ({email, password}) => axios.post(`https://eventech.outsystemscloud.com/Core/rest/User/v1/${email}/${password}`)


export default login;