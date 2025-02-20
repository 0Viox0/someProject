import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { ThemeProvider } from 'features/darkTheme/components/ThemeProvider';
import { ComponentProps, FC, useState } from 'react';
import { SidebarProps } from 'components/Sidebar/types';

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
    render: (args) => <SidebarWrapper args={args} />,
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
    render: (args) => <SidebarWrapper args={args} />,
};

export const LightTheme: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider initialTheme="light">
                <Story />
            </ThemeProvider>
        ),
    ],
    render: (args) => <SidebarWrapper args={args} />,
};

interface SidebarWrapperProps {
    args: SidebarProps;
}

const SidebarWrapper: FC<SidebarWrapperProps> = ({ args }) => {
    const [currentKey, setCurrentKey] = useState(0);

    const handleCurrentKeyChange = (newKey: number) => {
        setCurrentKey(newKey);
    };

    return (
        <>
            <Sidebar
                headerIcon={<HomeIcon />}
                headerText="This is menu"
                selectedKey={currentKey}
                onChange={handleCurrentKeyChange}
                menuItems={[
                    { key: 0, icon: <BoxIcon />, label: 'Home' },
                    { key: 1, icon: <ChartIcon />, label: 'Charts' },
                    { key: 2, icon: <ChartStockIcon />, label: 'Stats' },
                    { key: 3, icon: <BubbleIcon />, label: 'More' },
                ]}
                {...args}
            />
        </>
    );
};
