import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import styles from './PasswordInput.module.scss';

export const PasswordInput = ({
    label,
    id,
    name,
    placeholder,
    value,
    error,
    onChange,
    onBlur,
    className = '',
    required = false,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputClassName = error
        ? `${styles.password__input} ${styles.password__input_error}`
        : styles.password__input;

    return (
        <div className={`${styles.password} ${className}`}>
            <label htmlFor={id} className={styles.password__label}>
                {label}
                {required && <span className={styles.password__required}> </span>}
            </label>

            <div className={styles.password__wrapper}>
                <input
                    className={inputClassName}
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    onBlur={onBlur}
                    autoComplete="new-password"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? `${id}-error` : undefined}
                />

                <button
                    type="button"
                    className={styles.password__button}
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                    aria-pressed={showPassword}
                >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
            </div>

            {error && (
                <p id={`${id}-error`} className={styles.password__error}>
                    {error}
                </p>
            )}
        </div>
    );
};