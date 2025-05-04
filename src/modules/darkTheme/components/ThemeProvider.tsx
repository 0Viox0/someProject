import { FC, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Theme, ThemeProviderProps } from '../types/types';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const localStorageKey = 'app-theme';
    const isDarkTheme = window.matchMedia(
        '(prefers-color-scheme: dark)',
    ).matches;
    const defaultTheme: Theme = isDarkTheme ? 'dark' : 'light';

    const [theme, setTheme] = useState<Theme>(
        (localStorage.getItem(localStorageKey) as Theme) || defaultTheme,
    );

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';

        setTheme(newTheme);
        localStorage.setItem(localStorageKey, newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};
