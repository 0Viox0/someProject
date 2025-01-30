import { FC, useEffect, useState } from 'react';
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
    className,
}) => {
    const [innerValue, setInnerValue] = useState(
        (value ?? options) ? options[0].value : 0,
    );
    const [innerOptions, setInnerOptions] = useState(options ?? []);

    useEffect(() => {
        if (value) {
            setInnerValue(value);
        }
    }, [value]);

    useEffect(() => {
        if (options) {
            setInnerOptions(options);
        }
    }, [options]);

    const handleOptionClick = (option: number) => {
        if (!disabled) {
            if (onChange) {
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
            {innerOptions.map((option) => (
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
