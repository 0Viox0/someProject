import { Route, Routes } from 'react-router';
import { Home, Profile } from 'pages';
import { Layout } from 'components/Layout';

export const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route path="/home" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
            </Route>
        </Routes>
    );
};
