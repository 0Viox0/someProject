import { FC } from 'react';
import { MenuItemProps } from '../types';
import classNames from 'classnames';
import { NavLink } from 'react-router';

import './MenuItem.scss';

export const MenuItem: FC<MenuItemProps> = ({
    icon,
    isExpanded,
    route,
    children,
}) => {
    return (
        <NavLink
            to={route}
            className={({ isActive }) =>
                classNames('menuItemWrapper', {
                    highlight: isActive,
                })
            }
        >
            <span
                className={classNames('iconWrapper', {
                    expanded: isExpanded,
                })}
            >
                {icon}
            </span>
            {isExpanded && <div>{children}</div>}
        </NavLink>
    );
};
