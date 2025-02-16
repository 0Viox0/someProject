import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Theme } from '../types/types';

export const useTheme = () => {
    const { isDarkTheme, toggleDarkTheme } = useContext(ThemeContext);

    const theme: Theme = isDarkTheme ? 'dark' : 'light';

    return { theme, toggleDarkTheme };
};
