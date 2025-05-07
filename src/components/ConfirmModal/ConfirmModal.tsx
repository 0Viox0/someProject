import { FC } from 'react';
import { text } from 'shared/text/text';
import { Modal, Button } from 'ui';

import './ConfirmModal.scss';

export type ConfirmModalProps = {
    isOpen: boolean;
    onCancel: () => void;
    onOk: () => void;
    title: string;
    secondaryText: string;
    isLoadingButtons?: boolean;
};

export const ConfirmModal: FC<ConfirmModalProps> = ({
    isOpen,
    onCancel,
    onOk,
    title,
    secondaryText,
    isLoadingButtons,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onCancel={onCancel}
            theme="danger"
            title={title}
            footer={
                <div className="deleteModalFooterButtonsWrapper">
                    <Button
                        theme="info"
                        size="big"
                        onClick={onOk}
                        loading={isLoadingButtons}
                    >
                        {text.DELETE_MODAL.yes}
                    </Button>
                    <Button
                        theme="primary"
                        size="big"
                        onClick={onCancel}
                        disabled={isLoadingButtons}
                    >
                        {text.DELETE_MODAL.no}
                    </Button>
                </div>
            }
        >
            <div className="warningTextWrapper">
                <div className="modalDeleteWarningText">{secondaryText}</div>
            </div>
        </Modal>
    );
};
