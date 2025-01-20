import { FC, useState } from 'react';
import { SelectProps } from './types';
import ExpandArrowIcon from 'shared/assets/icons/ExpandArrow.svg';

import './Select.scss';
import classNames from 'classnames';

export const Select: FC<SelectProps> = ({
    selectedValue,
    onChange,
    className,
    options,
    size = 'medium',
    type = 'secondary',
    placeholder = '',
    disabled = false,
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    console.log(options);

    // target priority should educate the angles that you choose but never ever should you choose target priority over your position

    return (
        <div className={classNames('select-wrapper', `select-${size}`)}>
            <div
                className={classNames(
                    'chooseFiled',
                    `bg-${type}`,
                    `element-${size}`,
                )}
            >
                <span className="chooseFiled-text">{selectedValue}</span>
                <ExpandArrowIcon className="icon" />
            </div>
            <div className={classNames('optionsWrapper', `bg-${type}`)}>
                {options.map((option) => (
                    <div
                        className="option"
                        onClick={() => onChange(option.value)}
                    >
                        {option.label}
                    </div>
                ))}
            </div>
        </div>
    );
};
