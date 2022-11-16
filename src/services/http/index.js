import axios from 'axios';
import config from './../../config';

export default {
    movie: {
        load(data){
            return axios.get(`${config.host}/movie`, {
                params: data
            });
        }
    }
}