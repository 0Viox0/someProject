import { FC } from 'react';
import { ModalHeaderProps } from '../types';
import CloseIcon from 'shared/assets/icons/CloseIcon.svg';
import classNames from 'classnames';

import './ModalHeader.scss';

export const ModalHeader: FC<ModalHeaderProps> = ({ title, onCancel }) => {
    return (
        <div
            className={classNames('header-wrapper', {
                withoutTitle: !title,
            })}
        >
            {title && <h3 className="modal-title">{title}</h3>}
            <CloseIcon className="closeIcon" onClick={onCancel} />
        </div>
    );
};
