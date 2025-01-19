import { FC } from 'react';
import { ButtonProps, IconPosition } from './types';
import classNames from 'classnames';
import LoadingIcon from 'shared/assets/icons/LoadingIcon.svg';

import './Button.scss';

export const Button: FC<ButtonProps> = ({
    onClick,
    icon,
    children,
    className,
    disabled,
    size = 'medium',
    type = 'primary',
    iconPosition = 'left',
    loading = false,
}) => {
    const buttonClasses = classNames(
        'button',
        `button-${type}`,
        `button-${size}`,
        className,
    );

    const renderIcon = (iconPositionArg: IconPosition) => {
        return (
            iconPosition === iconPositionArg && (
                <span className={classNames('iconWrapper', iconPositionArg)}>
                    {loading ? (
                        <LoadingIcon width={20} height={20} />
                    ) : (
                        <>{icon}</>
                    )}
                </span>
            )
        );
    };

    return (
        <button
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled || loading}
        >
            {renderIcon('left')}
            <span className="text">{children}</span>
            {renderIcon('right')}
        </button>
    );
};
