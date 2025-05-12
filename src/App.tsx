import { Route, Routes } from 'react-router';
import {
    UserPage,
    UserPostsPage,
    PostPage,
    HomePage,
    NotFoundPage,
} from 'pages';
import { ErrorBoundary } from 'components/ErrorBoundary';
import { Layout } from 'modules/Layout';

import './index.scss';

export const App = () => {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="users" element={<UserPage />} />
                    <Route path="posts" element={<UserPostsPage />} />
                    <Route path="posts/:id" element={<PostPage />} />

                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </ErrorBoundary>
    );
};
