// src/components/FormTextarea.tsx
import React from 'react';
import { cn } from '../utils/cn';

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

const FormTextarea: React.FC<FormTextareaProps> = ({
  name,
  value,
  onChange,
  error,
  placeholder,
  rows = 4,
  cols,
  className,
  textareaClassName,
  showError = true,
  disabled = false,
}) => {
  return (
    <div className={cn('flex flex-col mb-4', className)}>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        disabled={disabled}
        className={cn(
          'border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y',
          error ? 'border-red-500' : 'border-gray-300',
          disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white',
          textareaClassName
        )}
      />
      {showError && error && (
        <span className="text-sm text-red-500 mt-1">{error}</span>
      )}
    </div>
  );
};

export default FormTextarea;

