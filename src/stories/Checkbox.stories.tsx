import type { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import { Checkbox } from 'components/Checkbox';

type StoryProps = ComponentProps<typeof Checkbox>;

const meta = {
    component: Checkbox,
    title: 'components/Checkbox',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: { checked: true, text: 'Some text' },
};

export const Secondary: Story = {
    args: {
        checked: true,
        text: 'Some text',
        size: 'small',
        theme: 'secondary',
        disabled: true,
    },
};

export const Info: Story = {
    args: {
        checked: true,
        text: 'Some text',
        size: 'big',
        theme: 'info',
    },
};

export const Danger: Story = {
    args: {
        checked: true,
        text: 'Some text',
        theme: 'danger',
    },
};
