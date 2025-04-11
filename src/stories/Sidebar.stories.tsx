import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { ThemeProvider } from 'features/darkTheme/components/ThemeProvider';
import { ComponentProps } from 'react';
import { MemoryRouter, Outlet, Route, Routes } from 'react-router';

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
        ),
    ],
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const DarkTheme: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider initialTheme="dark">
                <Story />
            </ThemeProvider>
        ),
    ],
    render: () => <SidebarWrapper />,
};

export const LightTheme: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider initialTheme="light">
                <Story />
            </ThemeProvider>
        ),
    ],
    render: () => <SidebarWrapper />,
};

const SidebarWrapper = () => {
    return (
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
    );
};
