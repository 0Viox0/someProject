import { FC, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeProviderProps } from '../types/types';

export const ThemeProvider: FC<ThemeProviderProps> = ({
    initialTheme = 'light',
    children,
}) => {
    const [isDarkTheme, setIsDarkTheme] = useState(initialTheme === 'dark');

    const toggleDarkTheme = () => {
        setIsDarkTheme((prevState) => !prevState);
    };

    return (
        <ThemeContext.Provider
            value={{
                isDarkTheme,
                toggleDarkTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
