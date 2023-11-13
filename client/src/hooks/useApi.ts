import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, Method } from 'axios';

interface UseApiReturn<T> {
    data: T | null;
    error: AxiosError | null;
    isLoading: boolean;
    fetchData: (url: string, method?: Method, options?: AxiosRequestConfig) => void;
}

const useApi = <T>(): UseApiReturn<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<AxiosError | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const api = axios.create({
        baseURL: 'http://192.168.0.10:3000',
    });

    const fetchData = async (url: string, method: Method = 'GET', options?: AxiosRequestConfig) => {
        setIsLoading(true);

        try {
            const response: AxiosResponse<T> = await api.request<T>({
                url,
                method,
                ...options,
            });
            
            setData(response.data);
            setError(null);
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error);
            } else {
                console.log("Error");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return { data, error, isLoading, fetchData };
};

export default useApi;