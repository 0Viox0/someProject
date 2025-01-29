import { ChangeEvent } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type Shape = 'circle' | 'square';

export interface SwitchProps extends BaseComponentProps {
    value?: boolean;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    shape?: Shape;
    label?: string;
}
