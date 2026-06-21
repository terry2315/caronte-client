import styles from './FormInput.module.scss';

export const FormInput = ({
    label,
    id,
    name,
    type = 'text',
    placeholder,
    value,
    error,
    onChange,
    onBlur,
    className = '',
    inputMode,
    autoComplete,
    required = false,
}) => {
    const inputClassName = error
        ? `${styles.field__input} ${styles.field__input_error}`
        : styles.field__input;

    return (
        <div className={`${styles.field} ${className}`}>
            <label htmlFor={id} className={styles.field__label}>
                {label}
                {required && <span className={styles.field__required}></span>}
            </label>

            <input
                className={inputClassName}
                type={type}
                placeholder={placeholder}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                inputMode={inputMode}
                autoComplete={autoComplete}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${id}-error` : undefined}
            />

            {error && (
                <p id={`${id}-error`} className={styles.field__error}>
                    {error}
                </p>
            )}
        </div>
    );
};