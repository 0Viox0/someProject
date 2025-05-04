import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { Button } from 'ui';
import classNames from 'classnames';

import './IconButton.scss';

export interface IconButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    colorTheme: 'transparent' | 'danger' | 'info';
}

export const IconButton: FC<IconButtonProps> = ({
    icon,
    colorTheme,
    className,
    ...props
}) => {
    const bttonClasses = classNames(
        'circle',
        {
            transparent: colorTheme === 'transparent',
        },
        className,
    );

    return (
        <Button
            theme={colorTheme === 'transparent' ? 'primary' : colorTheme}
            icon={icon}
            className={bttonClasses}
            {...props}
        />
    );
};
