import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const FormSelect = ({ name, value, onChange, options, error, placeholder, className = '', selectClassName = '', showError = true, disabled = false, }) => {
    return (_jsxs("div", { className: `flex flex-col mb-4 ${className}`, children: [_jsxs("select", { name: name, value: value, onChange: onChange, disabled: disabled, className: `border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'} ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'bg-white'} ${selectClassName}`, children: [placeholder && (_jsx("option", { value: "", disabled: true, children: placeholder })), options.map((option) => (_jsx("option", { value: option.value, children: option.label }, option.value)))] }), showError && error && (_jsx("span", { className: "text-sm text-red-500 mt-1", children: error }))] }));
};
export default FormSelect;
