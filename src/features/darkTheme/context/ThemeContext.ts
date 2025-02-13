import { createContext } from 'react';

export interface ThemeContextInterface {
    isDarkTheme: boolean;
    toggleDarkTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
    isDarkTheme: true,
    toggleDarkTheme: () => {},
});
