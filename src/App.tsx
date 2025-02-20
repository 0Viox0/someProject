import { Route, Routes } from 'react-router';
import { PostPage, UserPage, UserPostsPage } from 'pages/admin';
import { Layout } from 'components/Layout';

import './index.scss';

export const App = () => {
    return (
        <Routes>
            <Route path="/">
                <Route path="admin" element={<Layout />}>
                    <Route path="users" element={<UserPage />} />
                    <Route path="posts" element={<UserPostsPage />} />
                    <Route path="posts/:id" element={<PostPage />} />
                </Route>
            </Route>
        </Routes>
    );
};
