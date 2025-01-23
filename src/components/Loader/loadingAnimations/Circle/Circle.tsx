import { FC, useEffect, useRef, useState } from 'react';
import { BaseComponentProps } from 'shared/types/types';
import classNames from 'classnames';

export interface CircleProps extends Omit<BaseComponentProps, 'className'> {
    animationSpeed?: number;
}

import './Circle.scss';

export const Circle: FC<CircleProps> = ({
    size,
    type,
    animationSpeed = 30,
}) => {
    const [angle, setAngle] = useState(0);
    const circleRef = useRef<HTMLDivElement>(null);
    const rotateDelta = 10;

    useEffect(() => {
        const intervalId = window.setInterval(() => {
            setAngle((prevAngle) => prevAngle + rotateDelta);
        }, animationSpeed);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [animationSpeed]);

    useEffect(() => {
        circleRef.current.style.transform = `rotate(${angle}deg)`;
    }, [angle]);

    return (
        <div
            ref={circleRef}
            className={classNames('circle', `circle-${size}`, `circle-${type}`)}
        />
    );
};
