// src/components/FormInput.tsx
import React from 'react';
import { cn } from '../utils/cn';

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

const FormInput: React.FC<FormInputProps> = ({
  name,
  value,
  onChange,
  error,
  placeholder,
  type = 'text',
  className,
  inputClassName,
  showError = true,
}) => {
  return (
    <div className={cn('flex flex-col mb-4', className)}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={cn(
          'border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
          error ? 'border-red-500' : 'border-gray-300',
          inputClassName
        )}
      />
      {showError && error && (
        <span className="text-sm text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
};

export default FormInput;
