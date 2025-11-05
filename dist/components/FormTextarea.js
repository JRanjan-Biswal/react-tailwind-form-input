import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FormTextarea = ({ name, value, onChange, error, placeholder, rows = 4, cols, className = '', textareaClassName = '', showError = true, disabled = false, }) => {
    return (_jsxs("div", { className: `flex flex-col mb-4 ${className}`, children: [_jsx("textarea", { name: name, value: value, onChange: onChange, placeholder: placeholder, rows: rows, cols: cols, disabled: disabled, className: `border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-y ${error ? 'border-red-500' : 'border-gray-300'} ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${textareaClassName}` }), showError && error && (_jsx("span", { className: "text-sm text-red-500 mt-1", children: error }))] }));
};
export default FormTextarea;
