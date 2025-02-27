import { Sidebar } from 'components/Sidebar/Sidebar';
import { text } from 'shared/text/text';
import { Outlet } from 'react-router';
import { SidebarProps } from 'components/Sidebar/types';

import SiteLogo from 'shared/assets/icons/Bubble.svg';
import BubbleIcon from 'shared/assets/icons/Bubble.svg';
import ChartIcon from 'shared/assets/icons/Chart.svg';
import ChartStockIcon from 'shared/assets/icons/ChartStock.svg';
import UsersIcon from 'shared/assets/icons/Users.svg';

import './Layout.scss';

export const Layout = () => {
    const menuItems: SidebarProps['menuItems'] = [
        { key: 0, icon: <UsersIcon />, label: 'Users', route: '/admin/users' },
        { key: 1, icon: <ChartIcon />, label: 'Charts', route: '/admin/chart' },
        {
            key: 2,
            icon: <ChartStockIcon />,
            label: 'Stats',
            route: '/admin/stock',
        },
        { key: 3, icon: <BubbleIcon />, label: 'More', route: '/admin/bubble' },
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
