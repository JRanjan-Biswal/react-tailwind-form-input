// src/components/FormSelect.tsx
import React from 'react';
import { cn } from '../utils/cn';

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
  value: string;
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

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  value,
  onChange,
  options,
  error,
  placeholder,
  className,
  selectClassName,
  showError = true,
  disabled = false,
  renderOption,
}) => {
  return (
    <div className={cn('flex flex-col mb-4', className)}>
      <select
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={cn(
          'border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500',
          error ? 'border-red-500' : 'border-gray-300',
          disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white',
          selectClassName
        )}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option, index) => {
          if (renderOption) {
            const customOption = renderOption({ option, index });
            // Ensure key is set on custom option if not already present
            const key = option.key ?? option.value;
            return React.cloneElement(customOption, { 
              key: customOption.key ?? key,
              value: customOption.props.value ?? option.value
            });
          }
          return (
            <option key={option.key ?? option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
      {showError && error && (
        <span className="text-sm text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
};

export default FormSelect;

