import { Sidebar } from 'components/Sidebar/Sidebar';
import { text } from 'shared/text/text';
import { Outlet } from 'react-router';
import { SidebarProps } from 'components/Sidebar/types';

import SiteLogo from 'shared/assets/icons/Bubble.svg';
import ChartStockIcon from 'shared/assets/icons/ChartStock.svg';
import UsersIcon from 'shared/assets/icons/Users.svg';
import HomeIcon from 'shared/assets/icons/Home.svg';

import './Layout.scss';

export const Layout = () => {
    const menuItems: SidebarProps['menuItems'] = [
        { key: 0, icon: <HomeIcon />, label: 'Home', route: '/' },
        { key: 1, icon: <UsersIcon />, label: 'Users', route: '/users' },
        {
            key: 2,
            icon: <ChartStockIcon />,
            label: 'Posts',
            route: '/posts',
        },
    ];

    return (
        <div className="layout">
            <Sidebar
                headerIcon={<SiteLogo />}
                headerText={text.siteName}
                menuItems={menuItems}
            />
            <Outlet />
        </div>
    );
};
