// src/components/FormSelect.tsx
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

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  value,
  onChange,
  options,
  error,
  placeholder,
  className = '',
  selectClassName = '',
  showError = true,
  disabled = false,
}) => {
  return (
    <div className={`flex flex-col mb-4 ${className}`}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'} ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${selectClassName}`}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {showError && error && (
        <span className="text-sm text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
};

export default FormSelect;

