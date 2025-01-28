import { FC } from 'react';
import { SwitchProps } from './types';
import classNames from 'classnames';

import './Switch.scss';

export const Switch: FC<SwitchProps> = ({
    value,
    onChange,
    size = 'medium',
    theme = 'primary',
    shape = 'circle',
    disabled,
}) => {
    const handleToggle = () => {
        if (!disabled) {
            onChange();
        }
    };

    const switchClasses = classNames(
        `switchWrapper`,
        `switch-${size}`,
        `switch-${theme}`,
        `${value}`,
        {
            disabled: disabled,
        },
    );

    return (
        <div className={switchClasses} onClick={handleToggle}>
            <div
                className={classNames(
                    'shape',
                    `shape-${shape}`,
                    `state-${value}`,
                    `${value}`,
                )}
            ></div>
        </div>
    );
};
