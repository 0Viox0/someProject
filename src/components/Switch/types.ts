import { BaseComponentProps } from 'shared/types/types';

export type Shape = 'circle' | 'square';
export type SwitchState = 'on' | 'off';

export interface SwitchProps extends BaseComponentProps {
    value: SwitchState;
    onChange: () => void;
    disabled?: boolean;
    shape?: Shape;
}
