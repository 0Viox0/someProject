import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export interface ModalProps extends Omit<BaseComponentProps, 'size'> {
    isOpen: boolean;
    onOk?: () => void;
    onCancel?: () => void;
    okText?: string;
    cancelText?: string;
    children?: ReactNode;
    footer?: ReactNode;
    disabled?: boolean;
    title?: string;
    className?: string;
}

export interface RootPortalProps {
    children?: ReactNode;
    wrapperId?: string;
}

export interface ModalHeaderProps {
    title?: string;
    onCancel?: ModalProps['onCancel'];
}

export interface ModalFooterProps {
    footer?: ReactNode;
    onCancel?: ModalProps['onCancel'];
    onOk?: ModalProps['onOk'];
    okText?: string;
    cancelText?: string;
    theme?: ModalProps['theme'];
}
