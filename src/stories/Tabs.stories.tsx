import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from 'ui';
import { ComponentProps } from 'react';

import PandaIcon from 'shared/assets/icons/Panda.svg';

type StoryProps = ComponentProps<typeof Tabs>;

const meta = {
    component: Tabs,
    title: 'components/Tabs',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        items: [
            {
                key: 0,
                label: 'First',
                content: 'Some content of the first one',
            },
            { key: 1, label: 'Second', content: 'Second tab content' },
            { key: 2, label: 'Third', content: 'Third tab content' },
        ],
    },
};

export const Secondary: Story = {
    args: {
        items: [
            {
                key: 0,
                label: 'First',
                content: 'Some content of the first one',
            },
            { key: 1, label: 'Second', content: 'Second tab content' },
            {
                key: 2,
                label: 'Third',
                content: 'Third tab content',
                disabled: true,
            },
            {
                key: 3,
                label: 'Third',
                content: 'Third tab content',
                disabled: true,
            },
            { key: 4, label: 'Fourth', content: 'Content of the fourth tab' },
            { key: 5, label: 'Fifth', content: 'Fifth tab content' },
        ],
        theme: 'secondary',
    },
};

export const Info: Story = {
    args: {
        items: [
            {
                key: 0,
                label: 'First',
                content: (
                    <h3 style={{ textAlign: 'center', marginTop: '10px' }}>
                        This is first panda
                    </h3>
                ),
                icon: <PandaIcon />,
            },
            {
                key: 1,
                label: 'Second',
                content: (
                    <h3 style={{ textAlign: 'center', marginTop: '10px' }}>
                        This is second panda
                    </h3>
                ),
                icon: <PandaIcon />,
            },
        ],
        theme: 'info',
        size: 'big',
    },
};

export const Danger: Story = {
    args: {
        items: [
            {
                key: 0,
                label: 'First',
                content: 'Some content of the first one',
            },
            { key: 1, label: 'Second', content: 'Second tab content' },
            { key: 2, label: 'Third', content: 'Third tab content' },
        ],
        theme: 'danger',
        size: 'small',
    },
};
