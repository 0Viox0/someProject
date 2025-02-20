import { ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeProviderProps {
    children: ReactNode;
}

export interface DarkLightThemeBgWrapperProps {
    children: ReactNode;
}
