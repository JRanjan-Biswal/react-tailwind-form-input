// src/hooks/useFormSelect.ts
import { useState } from 'react';

export type SelectValidationRules = {
    required?: boolean;
    customValidator?: (value: string) => true | string;
};

interface UseFormSelectOptions {
    initialValue?: string;
    validations?: SelectValidationRules | false;
    customValidator?: (value: string) => true | string;
    suppressDefaultError?: boolean;
}

interface UseFormSelectReturn {
    value: string;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    validate: () => boolean;
}

const defaultValidators = {
    required: (val: string) =>
        val !== '' && val !== undefined && val !== null || 'This field is required.',
};

export const useFormSelect = ({
    initialValue = '',
    validations = {},
    customValidator,
    suppressDefaultError = false,
}: UseFormSelectOptions): UseFormSelectReturn => {
    const [value, setValue] = useState<string>(initialValue);
    const [error, setError] = useState<string>('');

    const validate = (): boolean => {
        if (validations !== false && typeof validations === 'object') {
            for (const key in validations as SelectValidationRules) {
                const rule = validations[key as keyof SelectValidationRules];
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

    const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

