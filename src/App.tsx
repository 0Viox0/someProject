import { Sidebar } from 'components/Sidebar/Sidebar';

import HomeIcon from 'shared/assets/icons/Home.svg';
import BubbleIcon from 'shared/assets/icons/Bubble.svg';
import ChartIcon from 'shared/assets/icons/Chart.svg';
import ChartStockIcon from 'shared/assets/icons/ChartStock.svg';
import BoxIcon from 'shared/assets/icons/Box.svg';
import { Outlet, Route, Routes } from 'react-router';

import './index.scss';

export const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <>
                        <Sidebar
                            headerIcon={<HomeIcon />}
                            headerText="This is menu"
                            menuItems={[
                                {
                                    key: 0,
                                    icon: <BoxIcon />,
                                    label: 'Home',
                                    route: '/something',
                                },
                                {
                                    key: 1,
                                    icon: <ChartIcon />,
                                    label: 'Charts',
                                    route: '/another',
                                },
                                {
                                    key: 2,
                                    icon: <ChartStockIcon />,
                                    label: 'Stats',
                                    route: '/hehe',
                                },
                                {
                                    key: 3,
                                    icon: <BubbleIcon />,
                                    label: 'More',
                                    route: '/third',
                                },
                            ]}
                        />
                        <Outlet />
                    </>
                }
            >
                <Route path="something" element={<p>something</p>} />
                <Route path="another" element={<p>another</p>} />
                <Route path="hehe" element={<p>hehe</p>} />
                <Route path="third" element={<p>third</p>} />
            </Route>
        </Routes>
    );
};
