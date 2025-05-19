import React from 'react';
export interface FormInputProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    placeholder?: string;
    type?: string;
    className?: string;
    inputClassName?: string;
    showError?: boolean;
}
declare const FormInput: React.FC<FormInputProps>;
export default FormInput;
