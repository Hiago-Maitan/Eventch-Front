import axios from 'axios'

const event = ({eventId}) => axios.get(`https://eventech.outsystemscloud.com/Core/rest/Event/v2/${eventId}`);
// const event = ({eventId}) => axios.get(`https://eventech-back.herokuapp.com/v2/events/${eventId}`);


export {event};