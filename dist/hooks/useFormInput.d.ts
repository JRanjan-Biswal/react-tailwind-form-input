export type ValidationRules = {
    email?: boolean;
    number?: boolean;
    text?: boolean;
    minLength?: number;
    maxLength?: number;
    regex?: string;
};
interface UseFormInputOptions {
    initialValue?: string;
    validations?: ValidationRules | false;
    customValidator?: (value: string) => true | string;
    suppressDefaultError?: boolean;
}
interface UseFormInputReturn {
    value: string;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    validate: () => boolean;
}
export declare const useFormInput: ({ initialValue, validations, customValidator, suppressDefaultError, }: UseFormInputOptions) => UseFormInputReturn;
export {};
