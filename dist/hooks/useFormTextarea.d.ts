export type TextareaValidationRules = {
    email?: boolean;
    number?: boolean;
    text?: boolean;
    minLength?: number;
    maxLength?: number;
    regex?: string;
};
interface UseFormTextareaOptions {
    initialValue?: string;
    validations?: TextareaValidationRules | false;
    customValidator?: (value: string) => true | string;
    suppressDefaultError?: boolean;
}
interface UseFormTextareaReturn {
    value: string;
    error: string;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    validate: () => boolean;
}
export declare const useFormTextarea: ({ initialValue, validations, customValidator, suppressDefaultError, ...props }: UseFormTextareaOptions) => UseFormTextareaReturn;
export {};
