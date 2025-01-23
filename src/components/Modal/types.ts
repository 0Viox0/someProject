import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export interface ModalProps extends Omit<BaseComponentProps, 'size'> {
    isOpen: boolean;
    onOk: () => void;
    onCancel: () => void;
    children?: ReactNode;
    disabled?: boolean;
    title?: string;
}
