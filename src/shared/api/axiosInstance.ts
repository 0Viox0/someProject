import axios from 'axios';
import { BASE_URL } from 'shared/constants/constants';

export const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});
