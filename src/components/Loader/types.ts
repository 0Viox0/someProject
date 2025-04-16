import { BaseComponentProps } from 'shared/types/types';

export type LoaderShape = 'dots' | 'circle';

export interface LoaderProps extends BaseComponentProps {
    /** Text before loader */
    text?: string;
    /** Loader appearance */
    loaderShape?: LoaderShape;
    /** Animation of the loader animation */
    animationSeed?: number;
    /** Some additional classes */
    className?: string;
}
