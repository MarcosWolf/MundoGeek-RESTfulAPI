import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api-mundogeek.onrender.com/'
});

export const useApi = () => ({
    wakeRender: async () => {
        const response = await api.post('/');
        return response.data;
    }
});