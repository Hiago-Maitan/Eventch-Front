import axios from 'axios';

const email = ({ eventId }) => axios.get(`http://localhost:8080/email/${eventId}`);

export {email};