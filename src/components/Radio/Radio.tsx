import { FC } from 'react';
import { RadioProps } from './types';
import classNames from 'classnames';

import './Radio.scss';

export const Radio: FC<RadioProps> = ({
    value,
    options,
    onChange,
    size = 'medium',
    theme = 'primary',
    disabled = false,
    direction = 'column',
}) => {
    const handleOptionClick = (option: number) => {
        if (!disabled) {
            onChange(option);
        }
    };

    const radioContainerClasses = classNames(
        'radioContainer',
        `list-${direction}`,
        {
            disabled: disabled,
        },
    );

    const circleClasses = classNames(
        'circle',
        `circle-${size}`,
        `color-${theme}`,
    );

    return (
        <div className={radioContainerClasses}>
            {options.map((option) => (
                <div
                    className="optionContainer"
                    key={option.value}
                    onClick={() => handleOptionClick(option.value)}
                >
                    <div className={circleClasses}>
                        {option.value === value && (
                            <div className="activeCircle"></div>
                        )}
                    </div>
                    <div className="labelWrapper">
                        {option.label}
                        {option.value === value && (
                            <div
                                className={classNames(
                                    'underline',
                                    `color-${theme}`,
                                )}
                            ></div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};
