import { FC, useEffect } from 'react';
import { DarkLightThemeBgWrapperProps } from '../types/types';
import { useTheme } from '../hooks/useTheme';

export const DarkLightThemeBgWrapper: FC<DarkLightThemeBgWrapperProps> = ({
    children,
}) => {
    const { theme } = useTheme();

    useEffect(() => {
        if (theme === 'dark') {
            document.body.style.backgroundColor = '#222329';
        } else {
            document.body.style.backgroundColor = 'white';
        }
    }, [theme]);

    return <>{children}</>;
};
