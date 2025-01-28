import { FC } from 'react';
import { RadioElement, RadioProps } from './types';
import classNames from 'classnames';

import './Radio.scss';

export const Radio: FC<RadioProps> = ({
    currentChoice,
    options,
    onChange,
    size = 'medium',
    theme = 'primary',
    disabled = false,
    direction = 'column',
}) => {
    const handleOptionClick = (option: RadioElement) => {
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
            {options.map((option, index) => (
                <div
                    className="optionContainer"
                    key={index}
                    onClick={() => handleOptionClick(option)}
                >
                    <div className={circleClasses}>
                        {option.value === currentChoice.value && (
                            <div className="activeCircle"></div>
                        )}
                    </div>
                    <div className="labelWrapper">
                        {option.label}
                        {option.value === currentChoice.value && (
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
