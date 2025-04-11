import { FC } from 'react';
import { MenuItemProps } from '../types';
import { useTheme } from 'features/darkTheme/hooks/useTheme';
import classNames from 'classnames';
import { Link, useMatch } from 'react-router';

import './MenuItem.scss';

export const MenuItem: FC<MenuItemProps> = ({
    icon,
    isExpanded,
    route,
    children,
}) => {
    const { theme } = useTheme();
    const match = useMatch(route);

    return (
        <Link
            to={route}
            className={classNames('menuItemWrapper', theme, {
                highlight: match,
            })}
        >
            <span
                className={classNames('iconWrapper', {
                    expanded: isExpanded,
                })}
            >
                {icon}
            </span>
            {isExpanded && <div>{children}</div>}
        </Link>
    );
};
