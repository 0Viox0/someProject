import { Sidebar } from 'components/Sidebar/Sidebar';
import { text } from 'shared/text/text';
import { useEffect, useState } from 'react';

import SiteLogo from 'shared/assets/icons/Bubble.svg';
import BubbleIcon from 'shared/assets/icons/Bubble.svg';
import ChartIcon from 'shared/assets/icons/Chart.svg';
import ChartStockIcon from 'shared/assets/icons/ChartStock.svg';
import UsersIcon from 'shared/assets/icons/Users.svg';

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
    );
};
