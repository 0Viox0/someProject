import { ButtonHTMLAttributes, ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type IconPosition = 'left' | 'right';

export interface ButtonProps
    extends BaseComponentProps,
        ButtonHTMLAttributes<HTMLButtonElement> {
    /** Position of the icon */
    iconPosition?: IconPosition;
    /** Valid ReactNode object that represents icon */
    icon?: ReactNode;
    /** Set whether the button is in loading state or not */
    loading?: boolean;
}
