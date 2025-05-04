import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router';
import { ThemeProvider } from 'modules/darkTheme';
import { Sidebar } from 'modules/Sidebar';
import { SidebarProps } from 'modules/Sidebar/types';

import HomeIcon from 'shared/assets/icons/Home.svg';
import BubbleIcon from 'shared/assets/icons/Bubble.svg';
import ChartIcon from 'shared/assets/icons/Chart.svg';
import ChartStockIcon from 'shared/assets/icons/ChartStock.svg';
import BoxIcon from 'shared/assets/icons/Box.svg';

type StoryProps = ComponentProps<typeof Sidebar>;

const meta = {
    component: Sidebar,
    title: 'components/Sidebar',
    parameters: {
        layout: 'fullscreen',
    },
    decorators: [
        (Story) => (
            <ThemeProvider>
                <MemoryRouter initialEntries={['/something']}>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Story />
                                    <Outlet />
                                </>
                            }
                        >
                            <Route path="something" element={<></>} />
                            <Route path="another" element={<></>} />
                            <Route path="hehe" element={<></>} />
                            <Route path="third" element={<></>} />
                        </Route>
                    </Routes>
                </MemoryRouter>
            </ThemeProvider>
        ),
    ],
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const DarkTheme: Story = {
    render: () => <SidebarWrapper />,
};

export const LightTheme: Story = {
    render: () => <SidebarWrapper />,
};

const SidebarWrapper = () => {
    return (
        <Sidebar
            headerIcon={<HomeIcon />}
            headerText="This is menu"
            menuItems={menuItems}
        />
    );
};

const menuItems: SidebarProps['menuItems'] = [
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
];
