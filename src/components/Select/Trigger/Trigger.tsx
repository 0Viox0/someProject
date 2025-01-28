import classNames from 'classnames';
import { FC } from 'react';
import ExpandArrowIcon from 'shared/assets/icons/ExpandArrow.svg';
import { TriggerProps } from '../types';

import './Trigger.scss';

export const Trigger: FC<TriggerProps> = ({
    theme,
    size,
    toggleExpandSelect,
    isExpanded,
    selectedValue,
}) => {
    return (
        <div
            className={classNames(
                'chooseFiled',
                `bg-${theme}`,
                `element-${size}`,
                `border-${theme}`,
            )}
            onClick={toggleExpandSelect}
        >
            <span
                className={classNames({
                    'chooseFiled-text-expanded': isExpanded,
                })}
            >
                {selectedValue}
            </span>
            <ExpandArrowIcon
                className={classNames('icon', {
                    'icon-expanded': isExpanded,
                    'icon-closed': !isExpanded,
                })}
            />
        </div>
    );
};
