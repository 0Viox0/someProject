import { ButtonHTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type IconPosition = 'left' | 'right';

export interface ButtonProps
    extends BaseComponentProps,
        ButtonHTMLAttributes<HTMLButtonElement> {
    iconPosition?: IconPosition;
    icon?: ReactNode;
    loading?: boolean;
}
