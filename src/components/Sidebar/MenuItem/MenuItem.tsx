import { FC } from 'react';
import { MenuItemProps } from '../types';
import { useTheme } from 'features/darkTheme/hooks/useTheme';
import classNames from 'classnames';

import './MenuItem.scss';

export const MenuItem: FC<MenuItemProps> = ({
    icon,
    isExpanded,
    menuItemId,
    currentKey,
    onMenuItemClick,
    children,
}) => {
    const { theme } = useTheme();

    const handleClick = () => {
        onMenuItemClick(menuItemId);
    };

    return (
        <div
            className={classNames('menuItemWrapper', theme, {
                highlight: currentKey === menuItemId,
            })}
            onClick={handleClick}
        >
            <span
                className={classNames('iconWrapper', {
                    expanded: isExpanded,
                    collapsed: !isExpanded,
                })}
            >
                {icon}
            </span>
            {isExpanded && <div>{children}</div>}
        </div>
    );
};
