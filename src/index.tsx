import ReactDOM from 'react-dom/client';
import { App } from './App';
import { ThemeProvider } from 'features/darkTheme/components/ThemeProvider';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <ThemeProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </Provider>,
);
