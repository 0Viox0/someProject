import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type Item = {
    key: number;
    label: string;
    disabled?: boolean;
    icon?: ReactNode;
    content?: ReactNode;
};

export interface TabsProps extends BaseComponentProps {
    /** Tabs of this Component */
    items: Item[];
    /** The tab key that will be shown and focused by default */
    defaultActiveKey?: Item['key'];
    /** Some additional classes */
    className?: string;
}
