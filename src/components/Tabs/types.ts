import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export type ArrowDirection = 'left' | 'right';

export type TabDirection = 'row' | 'column';

export type Item = {
    key: number;
    label: string;
    disabled?: boolean;
    icon?: ReactNode;
    content?: ReactNode;
};

export interface TabsProps extends BaseComponentProps {
    items: Item[];
    defaultActiveKey: number;
}
