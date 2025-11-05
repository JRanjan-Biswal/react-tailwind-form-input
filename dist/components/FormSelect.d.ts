import React from 'react';
export interface SelectOption {
    value: string;
    label: string;
}
export interface FormSelectProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    error?: string;
    placeholder?: string;
    className?: string;
    selectClassName?: string;
    showError?: boolean;
    disabled?: boolean;
}
declare const FormSelect: React.FC<FormSelectProps>;
export default FormSelect;
