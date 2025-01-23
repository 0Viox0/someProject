import { BaseComponentProps } from 'shared/types/types';
import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

import './Dots.scss';

export interface DotsProps extends Omit<BaseComponentProps, 'className'> {
    animationSpeed?: number;
}

export const Dots: FC<DotsProps> = ({ size, type, animationSpeed = 230 }) => {
    const [dots, setDots] = useState([
        `dot-${type}-light`,
        `dot-${type}-normal`,
        `dot-${type}-dark`,
    ]);

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setDots((prevDots) => [prevDots[2], prevDots[0], prevDots[1]]);
        }, animationSpeed);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [animationSpeed]);

    useEffect(() => {
        setDots([
            `dot-${type}-light`,
            `dot-${type}-normal`,
            `dot-${type}-dark`,
        ]);
    }, [type]);

    return (
        <div className="dots-wrapper">
            {dots.map((dot, index) => (
                <div
                    className={classNames('dot', `dot-${size}`, dot)}
                    key={index}
                />
            ))}
        </div>
    );
};
