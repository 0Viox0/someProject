import { FC, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeProviderProps } from '../types/types';

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

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
