import { FC } from 'react';
import { PostActionButtonProps } from '../types';
import classNames from 'classnames';

import './PostActionButton.scss';

export const PostActionButton: FC<PostActionButtonProps> = ({
    icon,
    colorTheme,
    onClick,
}) => {
    return (
        <button className={classNames('circle', colorTheme)} onClick={onClick}>
            <span className="iconWrapper">{icon}</span>
        </button>
    );
};
