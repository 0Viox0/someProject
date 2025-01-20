import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export interface CheckboxProps extends BaseComponentProps {
    icon?: ReactNode;
    checked?: boolean;
    onChange?: () => void;
    disabled?: boolean;
}
