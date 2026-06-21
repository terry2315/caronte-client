import { useMemo, useState } from 'react';
import {
    initialForm,
    initialTouched,
    validateForm,
    getRegisterPayload,
} from '../utils/registerValidations';

export const useRegisterForm = (onSubmit) => {
    const [formData, setFormData] = useState(initialForm);
    const [touched, setTouched] = useState(initialTouched);
    const [isLoading, setIsLoading] = useState(false);
    const [serverError, setServerError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const errors = useMemo(() => validateForm(formData), [formData]);

    const isFormValid = useMemo(() => {
        return Object.values(errors).every((error) => error === '');
    }, [errors]);

    const resetForm = () => {
        setFormData(initialForm);
        setTouched(initialTouched);
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        const newValue = type === 'checkbox' ? checked : value;

        setFormData((prevForm) => ({
            ...prevForm,
            [name]: newValue,
        }));

        setServerError('');
        setSuccessMessage('');
    };

    const handleBlur = (e) => {
        const { name } = e.target;

        setTouched((prevTouched) => ({
            ...prevTouched,
            [name]: true,
        }));
    };

    const showError = (fieldName) => {
        return touched[fieldName] && errors[fieldName];
    };

    const markAllFieldsAsTouched = () => {
        const allTouched = Object.keys(initialTouched).reduce((acc, field) => {
            acc[field] = true;
            return acc;
        }, {});

        setTouched(allTouched);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        markAllFieldsAsTouched();

        const currentErrors = validateForm(formData);
        const hasErrors = Object.values(currentErrors).some((error) => error !== '');

        if (hasErrors) return;

        const dataToSend = getRegisterPayload(formData);

        try {
            setIsLoading(true);
            setServerError('');
            setSuccessMessage('');

            if (onSubmit) {
                await onSubmit(dataToSend);
            }

            resetForm();
            setSuccessMessage('Registro procesado correctamente.');

        } catch (error) {
            setServerError(error.message || 'Ocurrió un error al registrar el usuario.');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        errors,
        touched,
        isFormValid,
        isLoading,
        serverError,
        successMessage,
        handleChange,
        handleBlur,
        handleSubmit,
        showError,
    };
};