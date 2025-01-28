import { InputHTMLAttributes } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type InputVariant = 'outlined' | 'filled' | 'borderless';
export type InputType = 'email' | 'password' | 'tel' | 'text' | 'url';

export interface InputProps
    extends BaseComponentProps,
        Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    error?: string;
    inputType?: InputType;
    variant?: InputVariant;
    label?: string;
}
