import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { SidebarProps } from './types';
import ArrowIcon from 'shared/assets/icons/Arrow.svg';
import { MenuItem } from './MenuItem/MenuItem';
import { Switch } from 'ui';
import { useTheme } from 'modules/darkTheme';

import './Sidebar.scss';

export const Sidebar: FC<SidebarProps> = ({
    headerIcon,
    headerText,
    menuItems,
    className,
}) => {
    const { theme, toggleTheme } = useTheme();
    const [isExpanded, setIsExpanded] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.outerWidth < 1000) {
                setIsExpanded(false);
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleButtonClick = () => {
        setIsExpanded((prevState) => !prevState);
    };

    return (
        <div className={classNames('sidebar', className)}>
            <div className="sidebarHeaderWrapper">
                <div className="sidebarHeader">
                    <span
                        className={classNames('headerIconWrapper', {
                            expanded: isExpanded,
                        })}
                    >
                        {headerIcon}
                    </span>
                    {isExpanded && (
                        <span className="headerTextWrapper">{headerText}</span>
                    )}
                </div>
                <div className="line">
                    <button
                        className="sidebarToggleButton"
                        onClick={handleButtonClick}
                    >
                        <ArrowIcon
                            className={classNames({
                                'icon-expanded': isExpanded,
                                'icon-collapsed': !isExpanded,
                            })}
                        />
                    </button>
                </div>
            </div>
            <div className="menuItemsContainer">
                {menuItems &&
                    menuItems.map((item) => (
                        <MenuItem
                            key={item.key}
                            icon={item.icon}
                            isExpanded={isExpanded}
                            menuItemId={item.key}
                            route={item.route}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
            </div>
            <div className="sidebarFooter">
                <Switch
                    value={theme === 'dark'}
                    theme="secondary"
                    onChange={toggleTheme}
                    shape="circle"
                    label={isExpanded && 'Dark theme'}
                />
            </div>
        </div>
    );
};
