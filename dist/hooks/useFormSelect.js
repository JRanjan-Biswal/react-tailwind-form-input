// src/hooks/useFormSelect.ts
import { useState } from 'react';
const defaultValidators = {
    required: (val) => val !== '' && val !== undefined && val !== null || 'This field is required.',
};
export const useFormSelect = ({ initialValue = '', validations = {}, customValidator, suppressDefaultError = false, }) => {
    const [value, setValue] = useState(initialValue);
    const [error, setError] = useState('');
    const validate = () => {
        if (validations !== false && typeof validations === 'object') {
            for (const key in validations) {
                const rule = validations[key];
                if (key === 'required' && rule === true) {
                    const valid = defaultValidators.required(value);
                    if (valid !== true) {
                        setError(valid);
                        return false;
                    }
                }
            }
        }
        // Check for customValidator prop (takes precedence over validations.customValidator)
        const validatorToUse = customValidator || (validations !== false && typeof validations === 'object' ? validations.customValidator : undefined);
        if (validatorToUse) {
            const result = validatorToUse(value);
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
