

const API_URL = import.meta.env.VITE_API_URL;

export const apiRequest = async (endpoint, options = {}) => {
    if (!API_URL) {
        throw new Error('Falta configurar VITE_API_URL en las variables de entorno.');
    }

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            'Content-Type': 'application/json',
            ...options.headers,
        },
    });

    const contentType = response.headers.get('content-type');

    const data = contentType && contentType.includes('application/json')
        ? await response.json()
        : null;

    if (!response.ok) {
        throw new Error(
            data?.message ||
            data?.mensaje ||
            'Error en la petición al servidor.'
        );
    }

    return data;
};