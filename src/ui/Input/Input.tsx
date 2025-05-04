import { FC } from 'react';
import { InputProps } from './types';
import classNames from 'classnames';

import './Input.scss';

/** Simple input component with several themes */
export const Input: FC<InputProps> = ({
    size = 'medium',
    theme = 'secondary',
    inputType = 'text',
    variant = 'outlined',
    error,
    label,
    className,
    ...props
}) => {
    const inputClasses = classNames(
        'input',
        `input-${theme}`,
        `input-${size}`,
        `input-${theme}-${variant}`,
        {
            'with-label': label,
        },
    );

    return (
        <div className={classNames('input-wrapper', className)}>
            {label && (
                <label
                    className={classNames(`label-${theme}`, `input-${size}`)}
                >
                    {label}
                </label>
            )}
            <div className="error-wrapper">
                <input className={inputClasses} type={inputType} {...props} />
                {error && <span className="error">{error}</span>}
            </div>
        </div>
    );
};
