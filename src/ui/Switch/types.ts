import { ChangeEvent } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type Shape = 'circle' | 'square';

export interface SwitchProps extends BaseComponentProps {
    /** State of the switch */
    value?: boolean;
    /** Optional function to change state of the switch */
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    /** Sets switch to disabled state */
    disabled?: boolean;
    /** Shape of inside switch indicator */
    shape?: Shape;
    /** Label after the switch */
    label?: string;
    /** Some additional classes */
    className?: string;
}
