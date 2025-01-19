import { FC } from 'react';
import { InputProps } from './types';
import classNames from 'classnames';

import './Input.scss';

export const Input: FC<InputProps> = ({
    value,
    onChange,
    error,
    size = 'medium',
    type = 'secondary',
    inputType = 'text',
    disabled = false,
    placeholder = '',
    variant = 'outlined',
    label = null,
}) => {
    const inputClasses = classNames(
        'input',
        `input-${type}`,
        `input-${size}`,
        `input-${type}-${variant}`,
        {
            'with-label': label && label !== '',
        },
    );

    return (
        <div className="input-wrapper">
            {label && (
                <label className={classNames(`label-${type}`, `input-${size}`)}>
                    {label}
                </label>
            )}
            <div className="error-wrapper">
                <input
                    className={inputClasses}
                    type={inputType}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={value}
                    onChange={onChange}
                />
                {error && <span className="error">{error}</span>}
            </div>
        </div>
    );
};
