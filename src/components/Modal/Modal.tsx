import { FC } from 'react';
import { ModalProps } from './types';
import classNames from 'classnames';
import { RootPortal } from './RootPortal/RootPortal';
import { ModalFooter } from './ModalFooter';
import { ModalHeader } from './ModalHeader';

import './Modal.scss';

export const Modal: FC<ModalProps> = ({
    theme = 'primary',
    isOpen = false,
    onOk,
    onCancel,
    children,
    title = '',
    className = '',
    okText,
    cancelText,
    footer,
}) => {
    const handleBackgroundOnClick = (event: React.MouseEvent) => {
        onCancel?.();
        event.stopPropagation();
    };

    const handleWrapperOnClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    const backgroundClasses = classNames(
        `background`,
        {
            hide: !isOpen,
        },
        className,
    );

    const modalFooterProps = {
        footer,
        okText,
        cancelText,
        onOk,
        onCancel,
        theme,
    };

    return (
        <RootPortal>
            <div
                className={backgroundClasses}
                onClick={handleBackgroundOnClick}
            >
                <div
                    className={classNames('modal-wrapper', `modal-${theme}`)}
                    onClick={handleWrapperOnClick}
                >
                    <ModalHeader title={title} onCancel={onCancel} />
                    <div className="children">{children}</div>
                    <ModalFooter {...modalFooterProps} />
                </div>
            </div>
        </RootPortal>
    );
};
