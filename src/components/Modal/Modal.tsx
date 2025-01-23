import { FC } from 'react';
import { ModalProps } from './types';
import classNames from 'classnames';
import CloseIcon from 'shared/assets/icons/CloseIcon.svg';
import { text } from './text';

import './Modal.scss';

export const Modal: FC<ModalProps> = ({
    type = 'primary',
    isOpen = false,
    onOk,
    onCancel,
    children,
    title = '',
    className = '',
}) => {
    const handleBackgroundOnClick = (event: React.MouseEvent) => {
        onCancel();
        event.stopPropagation();
    };

    const handleWrapperOnClick = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
        <div
            className={classNames(
                `background`,
                {
                    hide: !isOpen,
                },
                className,
            )}
            onClick={handleBackgroundOnClick}
        >
            <div
                className={classNames('modal-wrapper', `modal-${type}`)}
                onClick={handleWrapperOnClick}
            >
                {title && title !== '' && (
                    <h3 className="modal-title">{title}</h3>
                )}
                <CloseIcon className="closeIcon" onClick={onCancel} />
                <div className="children">{children}</div>
                <div className="buttons-wrapper">
                    <button className="button cancel-button" onClick={onCancel}>
                        {text.cancel}
                    </button>
                    <button
                        className={classNames(
                            'button',
                            'okButton',
                            `button-${type}`,
                        )}
                        onClick={onOk}
                    >
                        {text.ok}
                    </button>
                </div>
            </div>
        </div>
    );
};
