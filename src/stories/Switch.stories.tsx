import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from 'components/Switch';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Switch>;

const meta = {
    component: Switch,
    title: 'components/Switch',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        value: true,
    },
};

export const Secondary: Story = {
    args: {
        shape: 'square',
        theme: 'secondary',
        value: true,
        label: 'Toggle Something',
    },
};

export const Info: Story = {
    args: {
        size: 'big',
        theme: 'info',
        value: true,
    },
};

export const Danger: Story = {
    args: {
        size: 'medium',
        theme: 'danger',
        value: true,
        disabled: true,
        label: 'This is disabled',
        shape: 'circle',
    },
};
