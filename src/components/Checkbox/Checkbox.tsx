import { FC } from 'react';
import CheckIcon from 'shared/assets/icons/CheckIcon.svg';
import { CheckboxProps } from './types';
import classNames from 'classnames';

import './Checkbox.scss';

export const Checkbox: FC<CheckboxProps> = ({
    onChange,
    size = 'medium',
    type = 'primary',
    className = '',
    icon = <CheckIcon />,
    checked = false,
    disabled = false,
}) => {
    const checkboxClasses = classNames(
        'customCheckbox',
        `customCheckbox-${type}`,
        `customCheckbox-${size}`,
        className,
    );

    return (
        <label className="checkboxWrapper">
            <input
                className="realCheckbox"
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <div className={checkboxClasses}>
                <span className="checkIcon">{icon}</span>
            </div>
        </label>
    );
};
