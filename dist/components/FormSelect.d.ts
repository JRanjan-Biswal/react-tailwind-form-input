import React from 'react';
export interface SelectOption {
    value: string;
    label: string;
    key?: string;
}
export interface CustomOptionProps {
    option: SelectOption;
    index: number;
}
export interface FormSelectProps {
    name: string;
    value?: string;
    defaultValue?: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
    error?: string;
    placeholder?: string;
    className?: string;
    selectClassName?: string;
    showError?: boolean;
    disabled?: boolean;
    renderOption?: (props: CustomOptionProps) => React.ReactElement<HTMLOptionElement>;
}
declare const FormSelect: React.FC<FormSelectProps>;
export default FormSelect;
