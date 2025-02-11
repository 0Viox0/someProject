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
    items: Item[];
    defaultActiveKey?: Item['key'];
    className?: string;
}
