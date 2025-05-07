import { ReactNode } from 'react';

export type Theme = 'light' | 'dark';

export interface ThemeProviderProps {
    children: ReactNode;
}
