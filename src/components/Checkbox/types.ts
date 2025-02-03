import { ChangeEvent, ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export interface CheckboxProps extends BaseComponentProps {
    /** Valid ReactNode icon to display inside of the checkbox in checked: true state */
    icon?: ReactNode;
    /** Represents whether the icon is checked or not (without onChange just initial value) */
    checked?: boolean;
    /** Optional function to react on change event in checkbox */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /** Sets button in disabled mode*/
    disabled?: boolean;
    /** Text to the right of the checkbox */
    text?: string;
    /** Custom styles */
    className?: string;
}
