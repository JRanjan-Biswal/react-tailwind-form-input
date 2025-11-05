// src/hooks/useFormTextarea.ts
import { useState } from 'react';

export type TextareaValidationRules = {
    email?: boolean;
    number?: boolean;
    text?: boolean;
    minLength?: number;
    maxLength?: number; 
    regex?: string;
};

interface UseFormTextareaOptions {
    initialValue?: string;
    validations?: TextareaValidationRules | false;
    customValidator?: (value: string) => true | string;
    suppressDefaultError?: boolean;
}

interface UseFormTextareaReturn {
    value: string;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    validate: () => boolean;
    setValue: (value: string) => void;
}

const defaultValidators = {
    email: (val: string) =>
        /^\S+@\S+\.\S+$/.test(val) || 'Invalid email format.',
    number: (val: string) =>
        /^[0-9]+$/.test(val) || 'Only numbers are allowed.',
    text: (val: string) =>
        /^[A-Za-z\s]+$/.test(val) || 'Only letters allowed.',
    minLength: (val: string, len: number) =>
        val.length >= len || `Minimum length is ${len}.`,
    maxLength: (val: string, len: number) =>
        val.length <= len || `Maximum length is ${len}.`,
    regex: (val: string, pattern: string) =>
        new RegExp(pattern).test(val) || 'Invalid format.',
};

export const useFormTextarea = ({
    initialValue = '',
    validations = {},
    customValidator,
    suppressDefaultError = false,
    ...props
}: UseFormTextareaOptions): UseFormTextareaReturn => {
    const [value, setValue] = useState<string>(initialValue);
    const [error, setError] = useState<string>('');

    const validateValue = (): boolean => {
        if (validations !== false && typeof validations === 'object') {
            for (const key in validations as TextareaValidationRules) {
                const rule = validations[key as keyof TextareaValidationRules];
                if (key === 'regex' && typeof rule === 'string') {
                    const valid = defaultValidators.regex(value, rule);
                    if (valid !== true) {
                        setError(valid);
                        return false;
                    }
                } else if (key === 'minLength' || key === 'maxLength') {
                    const valid = defaultValidators[key](value, rule as number);
                    if (valid !== true) {
                        setError(valid);
                        return false;
                    }
                } else if (key in defaultValidators && ['email', 'number', 'text'].includes(key)) {
                    const valid = defaultValidators[key as 'email' | 'number' | 'text'](value);
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

    const validate = (): boolean => {
        return validateValue();
    };

    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const val = e.target.value;
        setValue(val);
        if (!suppressDefaultError) {
            validateValue();
        }
    };

    const setValueWithValidation = (val: string) => {
        setValue(val);
        if (!suppressDefaultError) {
            validateValue();
        }
    };

    return {
        value,
        error,
        onChange,
        validate,
        setValue: setValueWithValidation,
        ...props
    };
};

