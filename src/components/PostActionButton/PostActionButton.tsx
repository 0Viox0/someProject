import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import classNames from 'classnames';

import './PostActionButton.scss';

export interface PostActionButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    colorTheme: 'transparent' | 'danger' | 'info';
}

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
