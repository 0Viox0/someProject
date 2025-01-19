import { ReactNode } from 'react';

export type ButtonSize = 'small' | 'medium' | 'big';
export type IconPosition = 'left' | 'right';
export type ButtonType = 'primary' | 'secondary' | 'info' | 'danger';

export interface ButtonProps {
    onClick: () => void;
    size?: ButtonSize;
    type?: ButtonType;
    iconPosition?: IconPosition;
    disabled?: boolean;
    icon?: ReactNode;
    children?: ReactNode;
    loading?: boolean;
    className?: string;
}
