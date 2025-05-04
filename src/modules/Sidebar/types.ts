import { ReactNode } from 'react';

export interface MenuItem {
    key: number;
    icon: ReactNode;
    label: string;
    route: string;
}

export interface SidebarProps {
    /** Icon for the header of the sidebar */
    headerIcon: ReactNode;
    /** Text for the header of the sidebar */
    headerText: string;
    /** Menu items for the sidebar */
    menuItems?: MenuItem[];
    /** Some additional styles */
    className?: string;
}

export interface MenuItemProps {
    isExpanded: boolean;
    icon: ReactNode;
    children: ReactNode;
    menuItemId: number;
    route: string;
}
