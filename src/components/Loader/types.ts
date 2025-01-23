import { BaseComponentProps } from 'shared/types/types';

export type LoaderShape = 'dots' | 'circle';

export interface LoaderProps extends BaseComponentProps {
    text?: string;
    loaderShape?: LoaderShape;
    animationSeed?: number;
}
