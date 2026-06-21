export const initialForm = {
    name: '',
    lastName: '',
    age: '',
    email: '',
    phone: '',
    password: '',
    passwordRepeat: '',
    nationality: '',
    city: '',
    terms: false,
};

export const initialTouched = {
    name: false,
    lastName: false,
    age: false,
    email: false,
    phone: false,
    password: false,
    passwordRepeat: false,
    nationality: false,
    city: false,
    terms: false,
};

export const expressions = {
    name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    age: /^\d{1,3}$/,
    password: /^.{4,12}$/,
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^\d{7,14}$/,
};

export const validateField = (fieldName, value, currentForm) => {
    const cleanValue = typeof value === 'string' ? value.trim() : value;

    if (fieldName === 'name') {
        if (!cleanValue) return 'El nombre es obligatorio.';

        if (!expressions.name.test(cleanValue)) {
            return 'El nombre solo debe contener letras y máximo 40 caracteres.';
        }
    }

    if (fieldName === 'lastName') {
        if (!cleanValue) return 'El apellido es obligatorio.';

        if (!expressions.lastName.test(cleanValue)) {
            return 'El apellido solo debe contener letras y máximo 40 caracteres.';
        }
    }

    if (fieldName === 'age') {
        if (!cleanValue) return 'La edad es obligatoria.';

        if (!expressions.age.test(cleanValue)) {
            return 'La edad debe contener solo números.';
        }

        const ageNumber = Number(cleanValue);

        if (ageNumber < 1 || ageNumber > 120) {
            return 'Ingresa una edad válida.';
        }
    }

    if (fieldName === 'email') {
        if (!cleanValue) return 'El correo electrónico es obligatorio.';

        if (!expressions.email.test(cleanValue)) {
            return 'Ingresa un correo electrónico válido.';
        }
    }

    if (fieldName === 'phone') {
        if (!cleanValue) return 'El teléfono es obligatorio.';

        if (!expressions.phone.test(cleanValue)) {
            return 'El teléfono debe tener entre 7 y 14 números.';
        }
    }

    if (fieldName === 'password') {
        if (!cleanValue) return 'La contraseña es obligatoria.';

        if (!expressions.password.test(cleanValue)) {
            return 'La contraseña debe tener entre 4 y 12 caracteres.';
        }
    }

    if (fieldName === 'passwordRepeat') {
        if (!cleanValue) return 'Confirma tu contraseña.';

        if (cleanValue !== currentForm.password) {
            return 'Las contraseñas no coinciden.';
        }
    }

    if (fieldName === 'nationality') {
        if (!cleanValue) return 'Selecciona tu país.';
    }

    if (fieldName === 'city') {
        if (!cleanValue) return 'Selecciona tu ciudad.';
    }

    if (fieldName === 'terms') {
        if (!value) return 'Debes aceptar los términos y condiciones.';
    }

    return '';
};

export const validateForm = (formData) => {
    return {
        name: validateField('name', formData.name, formData),
        lastName: validateField('lastName', formData.lastName, formData),
        age: validateField('age', formData.age, formData),
        email: validateField('email', formData.email, formData),
        phone: validateField('phone', formData.phone, formData),
        password: validateField('password', formData.password, formData),
        passwordRepeat: validateField('passwordRepeat', formData.passwordRepeat, formData),
        nationality: validateField('nationality', formData.nationality, formData),
        city: validateField('city', formData.city, formData),
        terms: validateField('terms', formData.terms, formData),
    };
};

export const getRegisterPayload = (formData) => {
    return {
        name: formData.name.trim(),
        lastName: formData.lastName.trim(),
        age: Number(formData.age),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        password: formData.password,
        nationality: formData.nationality.trim(),
        city: formData.city.trim(),
    };
};