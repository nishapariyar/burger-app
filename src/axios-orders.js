import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-burger-app-bdf03.firebaseio.com/'
});

export default instance;