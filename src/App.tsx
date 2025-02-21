import { Route, Routes } from 'react-router';
import { PostPage, UserPage, UserPostsPage } from 'pages/admin';
import { Layout } from 'components/Layout';

import './index.scss';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="admin">
                    <Route path="users" element={<UserPage />} />
                    <Route path="posts" element={<UserPostsPage />} />
                    <Route path="posts/:id" element={<PostPage />} />
                </Route>
            </Route>
        </Routes>
    );
};
