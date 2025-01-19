import { ChangeEvent } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type InputVariant = 'outlined' | 'filled' | 'borderless';
export type InputType = 'email' | 'password' | 'tel' | 'text' | 'url';

export interface InputProps extends BaseComponentProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    error?: string;
    inputType?: InputType;
    disabled?: boolean;
    variant?: InputVariant;
    placeholder?: string;
    label?: string;
}
