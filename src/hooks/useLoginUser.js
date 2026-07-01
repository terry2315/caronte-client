export const useLoginUser = async (data) => {

    const API_URL = import.meta.env.VITE_API_URL;

    try {

        const response = await fetch(`${API_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (!response.ok) {
            return {
                success: false,
                message: result.message || 'Correo o contraseña incorrectos'
            };
        }

        return {
            success: true,
            data: result
        };

    } catch (error) {
        return {
            success: false,
            message: 'Error al conectar con el servidor'
        };
    }
};

