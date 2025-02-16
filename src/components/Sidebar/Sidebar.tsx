import { FC, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useTheme } from 'features/darkTheme/hooks/useTheme';
import { SidebarProps } from './types';
import ArrowIcon from 'shared/assets/icons/Arrow.svg';
import { MenuItem } from './MenuItem/MenuItem';
import { Switch } from 'components/Switch';

import './Sidebar.scss';

export const Sidebar: FC<SidebarProps> = ({
    headerIcon,
    headerText,
    menuItems,
    className,
    selectedKey,
    onChange,
}) => {
    const { theme, toggleDarkTheme } = useTheme();
    const [isExpanded, setIsExpanded] = useState(true);

    const [currentChoice, setCurrentChoice] = useState(
        selectedKey ?? menuItems[0]?.key ?? 0,
    );

    const handleButtonClick = () => {
        setIsExpanded((prevState) => !prevState);
    };

    const handleMenuItemClick = (newKey: number) => {
        setCurrentChoice(newKey);
        onChange?.(newKey);
    };

    useEffect(() => {
        setCurrentChoice(selectedKey);
    }, [selectedKey]);

    return (
        <div className={classNames('sidebar', `sidebar-${theme}`, className)}>
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
                <div className={classNames('line', theme)}>
                    <button
                        className={classNames('sidebarToggleButton', theme)}
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
                            currentKey={currentChoice}
                            menuItemId={item.key}
                            onMenuItemClick={handleMenuItemClick}
                        >
                            {item.label}
                        </MenuItem>
                    ))}
            </div>
            <div className="sidebarFooter">
                <Switch
                    value={theme === 'dark'}
                    theme="secondary"
                    onChange={toggleDarkTheme}
                    shape="circle"
                    label={isExpanded && 'Dark theme'}
                />
            </div>
        </div>
    );
};
