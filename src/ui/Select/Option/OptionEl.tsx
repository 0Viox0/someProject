import { FC } from 'react';
import { OptionProps } from '../types';
import classNames from 'classnames';

import './OptionEl.scss';

export const OptionEl: FC<OptionProps> = ({
    option,
    onClick,
    size,
    theme,
    selectedValue,
    ref,
}) => {
    return (
        <li
            className={classNames('option', `element-${size}`, {
                [`chosenOption-${theme}`]: option.value === selectedValue,
            })}
            onClick={() => onClick(option.value)}
            ref={ref}
        >
            {option.label}
        </li>
    );
};
