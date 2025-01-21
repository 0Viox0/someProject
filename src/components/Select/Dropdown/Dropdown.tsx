import classNames from 'classnames';
import { FC } from 'react';
import { DropdownProps } from '../types';

import './Dropdown.scss';

export const Dropdown: FC<DropdownProps> = ({
    isExpanded,
    selectedValue,
    options,
    type,
    size,
    expandedSectionRef,
    handleOptionClick,
}) => {
    return (
        <div
            className={classNames('optionsWrapper', `bg-${type}`, {
                active: isExpanded,
            })}
            ref={expandedSectionRef}
        >
            {options.map((option, index) => (
                <div
                    className={classNames('option', `element-${size}`, {
                        [`chosenOption-${type}`]:
                            option.label === selectedValue,
                    })}
                    onClick={() => handleOptionClick(option)}
                    key={index}
                >
                    {option.label}
                </div>
            ))}
        </div>
    );
};
