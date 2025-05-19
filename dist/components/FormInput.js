import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FormInput = ({ name, value, onChange, error, placeholder, type = 'text', className = '', inputClassName = '', showError = true, }) => {
    return (_jsxs("div", { className: `flex flex-col mb-4 ${className}`, children: [_jsx("input", { type: type, name: name, value: value, onChange: onChange, placeholder: placeholder, className: `border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'} ${inputClassName}` }), showError && error && (_jsx("span", { className: "text-sm text-red-500 mt-1", children: error }))] }));
};
export default FormInput;
