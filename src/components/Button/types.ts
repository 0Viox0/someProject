import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type IconPosition = 'left' | 'right';

export interface ButtonProps extends BaseComponentProps {
    onClick: () => void;
    iconPosition?: IconPosition;
    disabled?: boolean;
    icon?: ReactNode;
    children?: ReactNode;
    loading?: boolean;
}
