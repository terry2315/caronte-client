import styles from './SocialAuth.module.scss';
import { ApiGoogle } from '../../atoms/ApiGoogle/ApiGoogle';
import { ApiFacebook } from '../../atoms/ApiFacebook/ApiFacebook';

export const SocialAuth = () => {
    return (
        <section className={styles.socialAuth}>
            <p className={styles.socialAuth__title}>Usa una de tus redes</p>

            <div className={styles.socialAuth__buttons}>
                <button
                    type="button"
                    className={styles.socialAuth__button}
                    aria-label="Registrarse con Google"
                >
                    <ApiGoogle />
                </button>

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