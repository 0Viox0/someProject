import { InputHTMLAttributes } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type InputVariant = 'outlined' | 'filled' | 'borderless';
export type InputType = 'email' | 'password' | 'tel' | 'text' | 'url';

export interface InputProps
    extends BaseComponentProps,
        Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    /** Error message being  displayed below the input field */
    error?: string;
    /** Input type that represents the style of the input field*/
    inputType?: InputType;
    /** Type of the input (e.g. password, email etc.) */
    variant?: InputVariant;
    /** Text before input */
    label?: string;
}
