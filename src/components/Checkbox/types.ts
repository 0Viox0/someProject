import { ChangeEvent, ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export interface CheckboxProps extends BaseComponentProps {
    icon?: ReactNode;
    checked?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    text?: string;
    className?: string;
}
