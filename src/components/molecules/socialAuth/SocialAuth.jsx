import styles from './SocialAuth.module.scss';
import { ApiFacebook } from '../../atoms/ApiFacebook/ApiFacebook';
import { GoogleLogin } from '@react-oauth/google';

export const SocialAuth = () => {
    const API_URL = import.meta.env.VITE_API_URL?.replace(/\/$/, '');

    const handleGoogleSuccess = async (credentialResponse) => {
        try {
            if (!API_URL) {
                throw new Error('VITE_API_URL no está definida en el frontend');
            }

            if (!credentialResponse?.credential) {
                throw new Error('Google no devolvió credential');
            }

            const googleAuthUrl = `${API_URL}/auth/google`;


            const response = await fetch(googleAuthUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    credential: credentialResponse.credential,
                }),
            });

            const contentType = response.headers.get('content-type');

            if (!contentType || !contentType.includes('application/json')) {
                const text = await response.text();
                console.error('Respuesta no JSON:', text);
                throw new Error('El servidor no devolvió JSON');
            }

            const data = await response.json();

            if (!response.ok) {
                console.error('Error del backend:', data);
                alert(data.message || 'Error al iniciar sesión con Google');
                return;
            }

            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));

            alert('Inicio de sesión con Google correcto');

        } catch (error) {
            console.error('Error con Google Login:', error);
            alert(error.message || 'Error de conexión con el servidor');
        }
    };

    const handleGoogleError = () => {
        alert('Error al iniciar sesión con Google');
    };

    return (
        <section className={styles.socialAuth}>
            <p className={styles.socialAuth__title}>Usa una de tus redes</p>

            <div className={styles.socialAuth__buttons}>
                <div className={styles.socialAuth__googleButton}>
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={handleGoogleError}
                        text="signup_with"
                        shape="pill"
                    />
                </div>

                <button
                    type="button"
                    className={styles.socialAuth__button}
                    aria-label="Registrarse con Facebook"
                >
                    <ApiFacebook />
                </button>
            </div>

            <p className={styles.socialAuth__text}>
                Al ingresar aceptas términos y condiciones
            </p>
        </section>
    );
};