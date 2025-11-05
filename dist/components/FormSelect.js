import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// src/components/FormSelect.tsx
import React from 'react';
import { cn } from '../utils/cn';
const FormSelect = ({ name, value, defaultValue, onChange, options, error, placeholder, className, selectClassName, showError = true, disabled = false, renderOption, }) => {
    return (_jsxs("div", { className: cn('flex flex-col mb-4', className), children: [_jsxs("select", { name: name, value: value, defaultValue: defaultValue, onChange: onChange, disabled: disabled, className: cn('border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500', error ? 'border-red-500' : 'border-gray-300', disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white', selectClassName), children: [placeholder && (_jsx("option", { value: "", disabled: true, children: placeholder })), options.map((option, index) => {
                        if (renderOption) {
                            const customOption = renderOption({ option, index });
                            // Ensure key is set on custom option if not already present
                            const key = option.key ?? option.value;
                            return React.cloneElement(customOption, {
                                key: customOption.key ?? key,
                                value: customOption.props.value ?? option.value
                            });
                        }
                        return (_jsx("option", { value: option.value, children: option.label }, option.key ?? option.value));
                    })] }), showError && error && (_jsx("span", { className: "text-sm text-red-500 mt-1", children: error }))] }));
};
export default FormSelect;
