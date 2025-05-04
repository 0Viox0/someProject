import { BaseComponentProps } from 'shared/types/types';
import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';

import './Dots.scss';

export interface DotsProps extends Omit<BaseComponentProps, 'className'> {
    animationSpeed?: number;
}

export const Dots: FC<DotsProps> = ({ size, theme, animationSpeed = 230 }) => {
    const [dots, setDots] = useState([
        `dot-${theme}-light`,
        `dot-${theme}-normal`,
        `dot-${theme}-dark`,
    ]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots((prevDots) => [prevDots[2], prevDots[0], prevDots[1]]);
        }, animationSpeed);

        return () => {
            clearInterval(intervalId);
        };
    }, [animationSpeed]);

    useEffect(() => {
        setDots([
            `dot-${theme}-light`,
            `dot-${theme}-normal`,
            `dot-${theme}-dark`,
        ]);
    }, [theme]);

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
