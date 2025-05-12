export type ComponentSize = 'small' | 'medium' | 'big';
export type ComponentType = 'primary' | 'secondary' | 'info' | 'danger';

export interface BaseComponentProps {

    /** Size of the component */
    size?: ComponentSize;
  
    /** Theme, representing the color of the button */
    theme?: ComponentType;
}
