import { Link, Outlet } from 'react-router';

export const Layout = () => {
    return (
        <>
            <header>
                <ul>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                </ul>
            </header>
            <Outlet />
        </>
    );
};
