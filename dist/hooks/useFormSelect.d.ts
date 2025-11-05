export type SelectValidationRules = {
    required?: boolean;
    customValidator?: (value: string) => true | string;
};
interface UseFormSelectOptions {
    initialValue?: string;
    validations?: SelectValidationRules | false;
    customValidator?: (value: string) => true | string;
    suppressDefaultError?: boolean;
}
interface UseFormSelectReturn {
    value: string;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    validate: () => boolean;
}
export declare const useFormSelect: ({ initialValue, validations, customValidator, suppressDefaultError, ...props }: UseFormSelectOptions) => UseFormSelectReturn;
export {};
