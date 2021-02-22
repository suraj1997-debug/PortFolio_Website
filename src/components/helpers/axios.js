import axios from 'axios';
import { url } from '../../urlConfig';

const axiosInstance = axios.create({
    baseURL:url
});

export default axiosInstance;

