import classNames from 'classnames';
import { FC } from 'react';
import ExpandArrowIcon from 'shared/assets/icons/ExpandArrow.svg';
import { TriggerProps } from '../types';

import './Trigger.scss';

export const Trigger: FC<TriggerProps> = ({
    type,
    size,
    toggleExpandSelect,
    isExpanded,
    selectedValue,
}) => {
    return (
        <div
            className={classNames(
                'chooseFiled',
                `bg-${type}`,
                `element-${size}`,
                `border-${type}`,
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
