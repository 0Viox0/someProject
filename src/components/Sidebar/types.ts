import { Dispatch, ReactNode } from 'react';

export interface MenuItem {
    key: number;
    icon: ReactNode;
    label: string;
}

export interface SidebarProps {
    selectedKey?: number;
    onChange?: (newKey: number) => void;
    children?: ReactNode;
    headerIcon?: ReactNode;
    headerText?: string;
    menuItems?: MenuItem[];
    className?: string;
}

export interface MenuItemProps {
    isExpanded: boolean;
    icon: ReactNode;
    children: ReactNode;
    menuItemId: number;
    currentKey: number;
    onMenuItemClick: (newKey: number) => void;
}
