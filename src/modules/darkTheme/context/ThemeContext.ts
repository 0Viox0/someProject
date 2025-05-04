import { createContext } from 'react';
import { Theme } from '../types/types';

export interface ThemeContextInterface {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextInterface>({
    theme: 'dark',
    toggleTheme: () => {},
});
