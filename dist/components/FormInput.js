import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from '../utils/cn';
const FormInput = ({ name, value, onChange, error, placeholder, type = 'text', className, inputClassName, showError = true, }) => {
    return (_jsxs("div", { className: cn('flex flex-col mb-4', className), children: [_jsx("input", { type: type, name: name, value: value, onChange: onChange, placeholder: placeholder, className: cn('border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500', error ? 'border-red-500' : 'border-gray-300', inputClassName) }), showError && error && (_jsx("span", { className: "text-sm text-red-500 mt-1", children: error }))] }));
};
export default FormInput;
