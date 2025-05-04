import { FC } from 'react';
import { ModalFooterProps } from '../types';
import classNames from 'classnames';

import './ModalFooter.scss';

export const ModalFooter: FC<ModalFooterProps> = ({
    footer,
    okText = 'OK',
    cancelText = 'Cancel',
    onOk,
    onCancel,
    theme,
}) => {
    return (
        <div className="buttons-wrapper">
            {footer ? (
                <>{footer}</>
            ) : (
                <>
                    {onCancel && (
                        <button
                            className="modalFooterButton cancel-button"
                            onClick={onCancel}
                        >
                            {cancelText}
                        </button>
                    )}
                    {onOk && (
                        <button
                            className={classNames(
                                'modalFooterButton',
                                'okButton',
                                `footerButton-${theme}`,
                            )}
                            onClick={onOk}
                        >
                            {okText}
                        </button>
                    )}
                </>
            )}
        </div>
    );
};
