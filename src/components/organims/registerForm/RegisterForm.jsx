import { Link } from 'react-router-dom';
import styles from './RegisterForm.module.scss';
import { useRegisterForm } from '../../../hooks/useRegisterForm';
import { FormInput } from '../../molecules/formInput/FormInput';
import { PasswordInput } from '../../molecules/passwordInput/PasswordInput';
import { SocialAuth } from '../../molecules/socialAuth/SocialAuth';
import { registerUser } from '../../../services/userService';

export const RegisterForm = () => {

    const handleRegister = async (dataToSend) => {
        await registerUser(dataToSend);
    };


    const {
        formData,
        errors,
        isFormValid,
        isLoading,
        serverError,
        successMessage,
        handleChange,
        handleBlur,
        handleSubmit,
        showError,
    } = useRegisterForm(handleRegister);

    return (
        <form className={styles.registerForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.registerForm__content}>
                <SocialAuth />

                <div className={styles.registerForm__separator}>
                    <span></span>
                    <p>O usa tu correo electrónico</p>
                    <span></span>
                </div>

                <div className={styles.registerForm__fields}>
                    <FormInput
                        label="Nombre"
                        id="name"
                        name="name"
                        placeholder="Escribe tu nombre"
                        value={formData.name}
                        error={showError('name') ? errors.name : ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="given-name"
                        required
                    />

                    <FormInput
                        label="Apellido"
                        id="lastName"
                        name="lastName"
                        placeholder="Escribe tu apellido"
                        value={formData.lastName}
                        error={showError('lastName') ? errors.lastName : ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="family-name"
                        required
                    />

                    <FormInput
                        label="Edad"
                        id="age"
                        name="age"
                        placeholder="Escribe tu edad"
                        value={formData.age}
                        error={showError('age') ? errors.age : ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputMode="numeric"
                        required
                    />

                    <FormInput
                        label="Teléfono"
                        id="phone"
                        name="phone"
                        placeholder="Escribe tu teléfono"
                        value={formData.phone}
                        error={showError('phone') ? errors.phone : ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        inputMode="tel"
                        autoComplete="tel"
                        required
                    />

                    <FormInput
                        label="Correo electrónico"
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Escribe tu correo electrónico"
                        value={formData.email}
                        error={showError('email') ? errors.email : ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="email"
                        className={styles.registerForm__field_full}
                        required
                    />

                    <PasswordInput
                        label="Contraseña"
                        id="password"
                        name="password"
                        placeholder="Escribe tu contraseña"
                        value={formData.password}
                        error={showError('password') ? errors.password : ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />

                    <PasswordInput
                        label="Confirma tu contraseña"
                        id="passwordRepeat"
                        name="passwordRepeat"
                        placeholder="Confirma tu contraseña"
                        value={formData.passwordRepeat}
                        error={showError('passwordRepeat') ? errors.passwordRepeat : ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />

                    <FormInput
                        label="País"
                        id="nationality"
                        name="nationality"
                        placeholder="Selecciona tu país"
                        value={formData.nationality}
                        error={showError('nationality') ? errors.nationality : ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />

                    <FormInput
                        label="Ciudad"
                        id="city"
                        name="city"
                        placeholder="Selecciona tu ciudad"
                        value={formData.city}
                        error={showError('city') ? errors.city : ''}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        required
                    />
                </div>

                <div className={styles.registerForm__terms}>
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        onBlur={handleBlur}
                    />

                    <label htmlFor="terms">
                        Acepto los{' '}
                        <Link to="/terms">
                            términos y condiciones
                        </Link>
                    </label>
                </div>

                {showError('terms') && (
                    <p className={styles.registerForm__error}>
                        {errors.terms}
                    </p>
                )}

                {serverError && (
                    <p className={styles.registerForm__server_error}>
                        {serverError}
                    </p>
                )}

                {successMessage && (
                    <p className={styles.registerForm__success}>
                        {successMessage}
                    </p>
                )}

                <button
                    type="submit"
                    className={styles.registerForm__submit}
                    disabled={!isFormValid || isLoading}
                >
                    {isLoading ? 'Registrando...' : 'Regístrate ahora'}
                </button>

                <div className={styles.registerForm__login}>
                    <p>¿Ya tienes cuenta?</p>
                    <Link to="/account">Inicia sesión</Link>
                </div>
            </div>
        </form>
    );
    
};
