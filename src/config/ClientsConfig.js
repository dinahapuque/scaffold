import axios from 'axios';

export default clients = {
    ['default']: {
        client: axios.create({
            baseURL: 'http://192.168.0.1/api',
            responseType: 'json',
            timeout: 6000
        })
    }
};
