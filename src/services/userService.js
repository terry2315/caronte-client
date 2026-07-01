import { apiRequest } from './apiClient';

export const registerUser = async (userData) => {

    const API_URL = import.meta.env.VITE_API_URL;

    console.log('API_URL:', API_URL);
    return await apiRequest('/register', {
        method: 'POST',
        body: JSON.stringify(userData),
    });
};