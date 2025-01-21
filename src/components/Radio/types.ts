import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export interface RadioElement {
    value?: number;
    label?: ReactNode;
}

export type Direction = 'row' | 'column';

export interface RadioProps extends BaseComponentProps {
    currentChoice: RadioElement;
    options: RadioElement[];
    onChange: (newChoice: RadioElement) => void;
    disabled?: boolean;
    direction?: Direction;
}
