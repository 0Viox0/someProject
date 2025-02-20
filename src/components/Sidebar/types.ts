import { ReactNode } from 'react';

export interface MenuItem {
    key: number;
    icon: ReactNode;
    label: string;
    route?: string;
    action?: () => void;
}

export interface SidebarProps {
    /** Optional currently selected key (just starting option if no onChange provided)*/
    selectedKey?: number;
    /** Optional function that reacts to changing options*/
    onChange?: (newKey: number) => void;
    /** Icon for the header of the sidebar */
    headerIcon?: ReactNode;
    /** Text for the header of the sidebar */
    headerText?: string;
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
    currentKey: number;
    onMenuItemClick: (newKey: number) => void;
}
