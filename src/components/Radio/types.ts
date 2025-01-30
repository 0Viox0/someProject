import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export interface RadioElement {
    value?: number;
    label?: ReactNode;
}

export type Direction = 'row' | 'column';

export interface RadioProps extends BaseComponentProps {
    value?: number;
    options?: RadioElement[];
    onChange?: (newChoiceValue: number) => void;
    disabled?: boolean;
    direction?: Direction;
}
