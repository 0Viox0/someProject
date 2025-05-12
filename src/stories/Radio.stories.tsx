import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from 'ui';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Radio>;

const meta = {
    component: Radio,
    title: 'components/Radio',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        size: 'medium',
        options: [
            { value: 1, label: 'First option' },
            { value: 2, label: 'Second option' },
            { value: 3, label: 'Third option' },
        ],
    },
};

export const Secondary: Story = {
    args: {
        size: 'small',

        options: [
            { value: 1, label: 'First option' },
            { value: 2, label: 'Second option' },
            { value: 3, label: 'Third option' },
        ],

        theme: 'secondary',
        value: 2,
        disabled: false,
        direction: 'row',
    },
};

export const Info: Story = {
    args: {
        size: 'big',

        options: [
            { value: 1, label: 'First option' },
            { value: 2, label: 'Second option' },
            { value: 3, label: 'Third option' },
        ],

        theme: 'info',
        disabled: true,
    },
};

export const Danger: Story = {
    args: {
        size: 'medium',

        options: [
            { value: 1, label: 'First option' },
            { value: 2, label: 'Second option' },
            { value: 3, label: 'Third option' },
        ],

        theme: 'danger',
        direction: 'row',
        value: 2,
    },
};
