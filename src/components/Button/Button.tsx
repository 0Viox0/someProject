import { FC } from 'react';
import { ButtonProps, IconPosition } from './types';
import classNames from 'classnames';
import LoadingIcon from 'shared/assets/icons/LoadingIcon.svg';

import './Button.scss';

/** Simple button that supports several themes and sizes */
export const Button: FC<ButtonProps> = ({
    size = 'medium',
    theme = 'primary',
    iconPosition = 'left',
    icon,
    children,
    disabled,
    loading,
    className,
    ...props
}) => {
    const buttonClasses = classNames(
        'button',
        `button-${theme}`,
        `button-${size}`,
        className,
    );

    const renderIcon = (iconPositionArg: IconPosition) => {
        return (
            iconPosition === iconPositionArg && (
                <span
                    className={classNames('iconWrapper', {
                        rotateIcon: loading,
                        [iconPositionArg]: (loading || icon) && children,
                    })}
                >
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
            disabled={disabled || loading}
            {...props}
        >
            {renderIcon('left')}
            {children && <span className="text">{children}</span>}
            {renderIcon('right')}
        </button>
    );
};
