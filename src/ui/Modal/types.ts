import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export interface ModalProps extends Omit<BaseComponentProps, 'size'> {
    /** Manager the whether the modal is opened or not */
    isOpen: boolean;
    /** Optional function handling when user clicks built-in ok button */
    onOk?: () => void;
    /** Optional function handling when user clicks built-in ok cancel */
    onCancel?: () => void;
    /** Optional text that will be displayed on the ok button */
    okText?: string;
    /** Optional text that will be displayed on the ok button */
    cancelText?: string;
    /** Children */
    children?: ReactNode;
    /** Footer that replaces default buttons of the modal*/
    footer?: ReactNode;
    /** Optional title of the modal that will be displayed on the top*/
    title?: string;
    /** Some additional classes */
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
