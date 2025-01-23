import { FC } from 'react';
import { LoaderProps } from './types';
import { Dots, Circle } from './loadingAnimations';
import classNames from 'classnames';

import './Loader.scss';

export const Loader: FC<LoaderProps> = ({
    size = 'medium',
    type = 'secondary',
    text,
    loaderShape = 'dots',
    animationSeed,
    className,
}) => {
    return (
        <div className={classNames('loaderWrapper', className)}>
            <span className={classNames(`text text-${size}`)}>{text}</span>
            {loaderShape === 'dots' ? (
                <Dots size={size} type={type} animationSpeed={animationSeed} />
            ) : (
                <Circle
                    size={size}
                    type={type}
                    animationSpeed={animationSeed}
                />
            )}
        </div>
    );
};
