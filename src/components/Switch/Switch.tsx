import { ChangeEvent, FC, useEffect, useState } from 'react';
import { SwitchProps } from './types';
import classNames from 'classnames';

import './Switch.scss';

export const Switch: FC<SwitchProps> = ({
    size = 'medium',
    theme = 'primary',
    shape = 'circle',
    label,
    value,
    onChange,
    disabled,
    className,
}) => {
    const [checked, setChecked] = useState(value ?? false);

    const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
        if (!disabled) {
            if (onChange) {
                onChange(event);
            } else {
                setChecked(event.target.checked);
            }
        }
    };

    useEffect(() => {
        if (value) {
            setChecked(value);
        }
    }, [value]);

    const switchClasses = classNames(
        `switchWrapper`,
        `switch-${size}`,
        `switch-${theme}`,
        {
            on: checked,
            off: !checked,
        },
    );

    return (
        <label
            className={classNames('checkboxWrapper', className, {
                disabled: disabled,
            })}
        >
            <input
                className="realCheckbox"
                type="checkbox"
                checked={checked}
                onChange={handleToggle}
            />
            <div className={switchClasses}>
                <div
                    className={classNames('shape', `shape-${shape}`, {
                        on: checked,
                        off: !checked,
                    })}
                />
            </div>
            <span className={classNames('labelText', `labelText-${size}`)}>
                {label}
            </span>
        </label>
    );
};
