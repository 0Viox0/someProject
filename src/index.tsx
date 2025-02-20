import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from 'features/darkTheme/components/ThemeProvider';
import { BrowserRouter } from 'react-router';
import { DarkLightThemeBgWrapper } from 'features/darkTheme/components/DarkLightThemeBgWrapper';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThemeProvider>
        <DarkLightThemeBgWrapper>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </DarkLightThemeBgWrapper>
    </ThemeProvider>,
);
