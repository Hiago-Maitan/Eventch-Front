import axios from 'axios'

const event = ({id}) => axios.get(`https://eventech.outsystemscloud.com/Core/rest/Event/v1/${id}`);

export default event;