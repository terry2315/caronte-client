import styles from './Account.module.scss';
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { ApiGoogle } from '../../atoms/ApiGoogle/ApiGoogle';
import { ApiFacebook } from '../../atoms/ApiFacebook/ApiFacebook';
import { Link } from 'react-router-dom';

export const Account = () => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className={styles.account}>

            <div className={styles.account}>
                <div className={styles.account__background}>
                    <div className={styles.account__card}>

                        <div className={styles.account__section}>
                            <p className={styles.account__title}>Inicia sesión</p>

                            <div className={styles.account__social_buttons}>
                                <ApiGoogle />
                                <ApiFacebook />
                            </div>
                        </div>

                        <form className={styles.form}>
                            <div className={styles.account__section}>
                                <p className={styles.account__subtitle}>
                                    O usa tu correo electrónico
                                </p>
                            </div>

                            <div className={styles.form__group}>
                                <label className={styles.form__label} htmlFor="email">
                                    Correo electrónico
                                </label>

                                <input
                                    className={styles.form__input}
                                    type="email"
                                    placeholder="Ingresa tu correo electrónico"
                                    id="email"
                                    name="email"
                                />
                            </div>

                            <div className={styles.form__group}>
                                <label className={styles.form__label} htmlFor="password">
                                    Contraseña
                                </label>

                                <div className={styles.form__password_wrapper}>
                                    <input
                                        className={styles.form__input}
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Ingresa tu contraseña"
                                        id="password"
                                        name="password"
                                    />

                                    <button
                                        className={styles.form__password_toggle}
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                                    >
                                        {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                                    </button>
                                </div>
                            </div>

                            <div className={styles.account__actions}>
                                <Link className={styles.account__password_forgot}>
                                    ¿Olvidaste tu contraseña?
                                </Link>

                                <button className={styles.form__submit}>
                                    Iniciar sesión
                                </button>
                            </div>

                            <div className={styles.account__bottom}>
                                <p className={styles.account__bottom_text}>
                                    ¿No tienes una cuenta?
                                </p>

                                <Link className={styles.account__bottom_link} to='/register'>
                                    Regístrate gratis
                                </Link>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div >
    )
}
