export type ComponentSize = 'small' | 'medium' | 'big';
export type ComponentType = 'primary' | 'secondary' | 'info' | 'danger';

export interface BaseComponentProps {
    size?: ComponentSize;
    theme?: ComponentType;
}
