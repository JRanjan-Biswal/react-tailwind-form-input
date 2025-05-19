// src/hooks/useFormInput.ts
import { useState } from 'react';
const defaultValidators = {
    email: (val) => /^\S+@\S+\.\S+$/.test(val) || 'Invalid email format.',
    number: (val) => /^[0-9]+$/.test(val) || 'Only numbers are allowed.',
    text: (val) => /^[A-Za-z\s]+$/.test(val) || 'Only letters allowed.',
    minLength: (val, len) => val.length >= len || `Minimum length is ${len}.`,
    maxLength: (val, len) => val.length <= len || `Maximum length is ${len}.`,
    regex: (val, pattern) => new RegExp(pattern).test(val) || 'Invalid format.',
};
export const useFormInput = ({ initialValue = '', validations = {}, customValidator, suppressDefaultError = false, }) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');
    const validate = () => {
        if (validations !== false && typeof validations !== 'object') {
            for (const key in validations) {
                const rule = validations[key];
                if (key === 'regex' && typeof rule === 'string') {
                    const valid = defaultValidators.regex(value, rule);
                    if (valid !== true) {
                        setError(valid);
                        return false;
                    }
                }
                else if (key === 'minLength' || key === 'maxLength') {
                    const valid = defaultValidators[key](value, rule);
                    if (valid !== true) {
                        setError(valid);
                        return false;
                    }
                }
                else if (key in defaultValidators && ['email', 'number', 'text'].includes(key)) {
                    const valid = defaultValidators[key](value);
                    if (valid !== true) {
                        setError(valid);
                        return false;
                    }
                }
            }
        }
        if (customValidator) {
            const result = customValidator(value);
            if (result !== true) {
                setError(result);
                return false;
            }
        }
        setError('');
        return true;
    };
    const onChange = (e) => {
        const val = e.target.value;
        setValue(val);
        if (!suppressDefaultError) {
            validate();
        }
    };
    return {
        value,
        error,
        onChange,
        validate,
    };
};
