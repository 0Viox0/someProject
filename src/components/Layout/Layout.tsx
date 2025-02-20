import { Sidebar } from 'components/Sidebar/Sidebar';
import { text } from 'shared/text/text';
<<<<<<< HEAD
import { Outlet } from 'react-router';
import { SidebarProps } from 'components/Sidebar/types';
=======
import { useEffect, useState } from 'react';
>>>>>>> 6ebe1ad (feat: do basic layout and create files)

import SiteLogo from 'shared/assets/icons/Bubble.svg';
import BubbleIcon from 'shared/assets/icons/Bubble.svg';
import ChartIcon from 'shared/assets/icons/Chart.svg';
import ChartStockIcon from 'shared/assets/icons/ChartStock.svg';
import UsersIcon from 'shared/assets/icons/Users.svg';

<<<<<<< HEAD
import './Layout.scss';

export const Layout = () => {
    const menuItems: SidebarProps['menuItems'] = [
        { key: 0, icon: <UsersIcon />, label: 'Users', route: 'admin/users' },
        { key: 1, icon: <ChartIcon />, label: 'Charts' },
        { key: 2, icon: <ChartStockIcon />, label: 'Stats' },
        { key: 3, icon: <BubbleIcon />, label: 'More' },
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
=======
export const Layout = () => {
    const [currentChoice, setCurrentChoice] = useState<number>(0);

    useEffect(() => {
        if (currentChoice) {
        }
    }, [currentChoice]);

    return (
        <>
            <Sidebar
                headerIcon={<SiteLogo />}
                headerText={text.siteName}
                menuItems={[
                    { key: 0, icon: <UsersIcon />, label: 'Users' },
                    { key: 1, icon: <ChartIcon />, label: 'Charts' },
                    { key: 2, icon: <ChartStockIcon />, label: 'Stats' },
                    { key: 3, icon: <BubbleIcon />, label: 'More' },
                ]}
            />
        </>
>>>>>>> 6ebe1ad (feat: do basic layout and create files)
    );
};
