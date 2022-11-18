import axios from 'axios';
import config from './../../config';

export default {
    movie: {
        load(data){
            return axios.get(`${config.host}/movie`, {
                params: data
            });
        },
        findApi(){
            return axios.post(`${config.host}/movie`);
        },
        destroy(){
            return axios.delete(`${config.host}/movie`);
        }
    }
}