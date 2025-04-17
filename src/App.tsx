import { Route, Routes } from 'react-router';
import { Layout } from 'components/Layout';
import { UserPage, UserPostsPage, PostPage, Home } from 'pages';

import './index.scss';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="users" element={<UserPage />} />
                <Route path="posts" element={<UserPostsPage />} />
                <Route path="posts/:id" element={<PostPage />} />
            </Route>
        </Routes>
    );
};
