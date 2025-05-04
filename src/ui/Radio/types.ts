import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export interface RadioElement {
    value?: number;
    label?: ReactNode;
}

export type Direction = 'row' | 'column';

export interface RadioProps extends BaseComponentProps {
    /** Radio options */
    options: RadioElement[];
    /** The currentChosen of the radio (initial value if without onChange) */
    value?: number;
    /** Optional function to react to change event*/
    onChange?: (newChoiceValue: number) => void;
    /** Sets radio in the disabled mode */
    disabled?: boolean;
    /** Sets direction of the radio */
    direction?: Direction;
    /** Some additional types */
    className?: string;
}
