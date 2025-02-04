import { FC } from 'react';
import { ModalFooterProps } from '../types';
import { text } from '../text';
import classNames from 'classnames';

import './ModalFooter.scss';

export const ModalFooter: FC<ModalFooterProps> = ({
    footer,
    okText,
    cancelText,
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
                            className="button cancel-button"
                            onClick={onCancel}
                        >
                            {cancelText ?? text.cancel}
                        </button>
                    )}
                    {onOk && (
                        <button
                            className={classNames(
                                'button',
                                'okButton',
                                `button-${theme}`,
                            )}
                            onClick={onOk}
                        >
                            {okText ?? text.ok}
                        </button>
                    )}
                </>
            )}
        </div>
    );
};
