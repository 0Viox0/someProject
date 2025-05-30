import { ChangeEvent, FC, useState } from 'react';
import CheckIcon from 'shared/assets/icons/CheckIcon.svg';
import { CheckboxProps } from './types';
import classNames from 'classnames';

import './Checkbox.scss';

/**  Simple checkbox with several themes */
export const Checkbox: FC<CheckboxProps> = ({
    onChange,
    size = 'medium',
    theme = 'primary',
    icon = <CheckIcon />,
    checked = false,
    disabled = false,
    text,
    className = '',
}) => {
    const checkboxClasses = classNames(
        'customCheckbox',
        `customCheckbox-${theme}`,
        `customCheckbox-${size}`,
    );
    const [innerIsChecked, setInnerIsChecked] = useState(checked);

    const innerOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
            onChange(event);
        } else {
            setInnerIsChecked((prevState) => !prevState);
        }
    };

    return (
        <label className={classNames('checkboxWrapper', className)}>
            <input
                className="realCheckbox"
                type="checkbox"
                checked={innerIsChecked}
                onChange={innerOnChange}
                disabled={disabled}
            />
            <div className={checkboxClasses}>
                <span className="checkIcon">{icon}</span>
            </div>
            {text && (
                <span className={classNames('text', `text-${size}`)}>
                    {text}
                </span>
            )}
        </label>
    );
};
