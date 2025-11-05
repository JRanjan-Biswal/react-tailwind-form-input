import React from 'react';
export interface FormTextareaProps {
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    error?: string;
    placeholder?: string;
    rows?: number;
    cols?: number;
    className?: string;
    textareaClassName?: string;
    showError?: boolean;
    disabled?: boolean;
}
declare const FormTextarea: React.FC<FormTextareaProps>;
export default FormTextarea;
