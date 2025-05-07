import { FC, useEffect, useState } from 'react';
import { RadioProps } from './types';
import classNames from 'classnames';

import './Radio.scss';

/** Simple radio component with several themes */
export const Radio: FC<RadioProps> = ({
    value,
    options,
    onChange,
    size = 'medium',
    theme = 'primary',
    disabled = false,
    direction = 'column',
    className,
}) => {
    const [innerValue, setInnerValue] = useState(
        value ?? (options?.length ? options[0].value : 0),
    );

    useEffect(() => {
        if (value !== undefined) {
            setInnerValue(value);
        }
    }, [value]);

    const handleOptionClick = (option: number) => {
        if (!disabled) {
            if (onChange && value !== undefined) {
                onChange(option);
            } else {
                setInnerValue(option);
            }
        }
    };

    const radioContainerClasses = classNames(
        'radioContainer',
        `list-${direction}`,
        {
            disabled: disabled,
        },
        className,
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
                        {option.value === innerValue && (
                            <div className="activeCircle"></div>
                        )}
                    </div>
                    <div className="labelWrapper">
                        {option.label}
                        {option.value === innerValue && (
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
