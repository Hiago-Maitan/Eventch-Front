import axios from 'axios'

const login = ({id}) => axios.post(`https://eventech.outsystemscloud.com/Core/rest/User/v1/${id}`)


export default login;