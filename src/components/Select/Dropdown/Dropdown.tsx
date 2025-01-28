import classNames from 'classnames';
import { FC } from 'react';
import { DropdownProps } from '../types';

import './Dropdown.scss';

export const Dropdown: FC<DropdownProps> = ({
    isExpanded,
    selectedValue,
    options,
    theme,
    size,
    expandedSectionRef,
    handleOptionClick,
}) => {
    return (
        <div
            className={classNames('optionsWrapper', `bg-${theme}`, {
                active: isExpanded,
            })}
            ref={expandedSectionRef}
        >
            {options.map((option, index) => (
                <div
                    className={classNames('option', `element-${size}`, {
                        [`chosenOption-${theme}`]:
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
