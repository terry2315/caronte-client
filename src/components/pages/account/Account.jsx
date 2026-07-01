import styles from './Account.module.scss';
import { useState } from 'react';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import { ApiGoogle } from '../../atoms/ApiGoogle/ApiGoogle';
import { ApiFacebook } from '../../atoms/ApiFacebook/ApiFacebook';
import { Link } from 'react-router-dom';
import { useLoginUser } from '../../../hooks/useLoginUser';
import { useNavigate } from 'react-router-dom';

export const Account = () => {

    const navigate = useNavigate();

    const [showPassword, setShowPassword] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    const [formError, setFormError] = useState('');

    const [errorUser, setErrorUser] = useState({});

    const [dataUser, setDataUser] = useState({
        email: '',
        password: ''
    });

    const expression = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    const handleValores = (e) => {

        const { name, value } = e.target;

        setDataUser({
            ...dataUser,
            [name]: value
        });

        setErrorUser({
            ...errorUser,
            [name]: ''
        });

        setFormError('');
    };

    const validateData = () => {

        let newErrors = {};

        const cleanEmail = dataUser.email.trim().toLowerCase();
        const password = dataUser.password;

        if (!cleanEmail) {
            newErrors.email = 'El correo electronico es obligatorio';
        } else if (!expression.email.test(cleanEmail)) {
            newErrors.email = 'El correo electronico no es valido';
        }

        if (!password) {
            newErrors.password = 'La contraseña es obligatoria';
        }

        setErrorUser(newErrors);

        return Object.keys(newErrors).length === 0;

    };

    const sendData = async (e) => {
        e.preventDefault();

        setFormError('');

        const isValid = validateData();

        if (!isValid) {
            return;
        }

        try {
            setIsLoading(true);

            const cleanData = {
                email: dataUser.email.trim().toLocaleLowerCase(),
                password: dataUser.password
            };

            const result = await useLoginUser(cleanData);

            console.log(result)

            if (result.success) {
                navigate('/');
                return;
            }

            setFormError(result.message || 'Correo o contraseña incorrectos');

        } catch (error) {
            setFormError('No pudimos iniciar sesion en este momento');
        } finally {
            setIsLoading(false);
        }

    };

    return (
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

                    <form className={styles.form} onSubmit={sendData}>
                        <div className={styles.account__section}>
                            <p className={styles.account__subtitle}>
                                O usa tu correo electrónico
                            </p>
                        </div>

                        <div className={styles.form__group}>

                            {formError && (
                                <p className={styles.form__error_general}>{formError}</p>
                            )}

                            <label className={styles.form__label} htmlFor="email">
                                Correo electrónico
                            </label>

                            <input
                                className={styles.form__input}
                                type="email"
                                placeholder="Ingresa tu correo electrónico"
                                id="email"
                                name="email"
                                value={dataUser.email}
                                onChange={handleValores}

                            />

                            {errorUser.email && (
                                <p className={styles.form__error}>{errorUser.email}</p>
                            )}

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
                                    value={dataUser.password}
                                    onChange={handleValores}
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

                            {errorUser.password && (
                                <p className={styles.for__error}>{errorUser.password}</p>
                            )}

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
    )
}
