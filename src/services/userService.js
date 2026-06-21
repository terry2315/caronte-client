import { apiRequest } from './apiClient';

export const registerUser = async (userData) => {
    return await apiRequest('/register', {
        method: 'POST',
        body: JSON.stringify(userData),
    });
};