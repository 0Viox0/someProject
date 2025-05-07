import type { Meta, StoryObj } from '@storybook/react';

import { Select } from 'ui';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Select>;

const meta = {
    component: Select,
    title: 'components/Select',
    parameters: {
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '150px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        options: [
            {
                value: 0,
                label: 'First value',
            },
            {
                value: 1,
                label: 'Second value',
            },
            {
                value: 2,
                label: 'Third value',
            },
        ],

        theme: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        options: [
            {
                value: 0,
                label: 'First value',
            },
            {
                value: 1,
                label: 'Second value',
            },
            {
                value: 2,
                label: 'Third value',
            },
            {
                value: 3,
                label: 'Fourth value',
            },
            {
                value: 4,
                label: 'Fifth value',
            },
            {
                value: 5,
                label: 'Sixth value',
            },
            {
                value: 6,
                label: 'Seventh value',
            },
        ],

        size: 'small',
        selectedValue: 2,
    },
};

export const Info: Story = {
    args: {
        options: [
            {
                value: 0,
                label: 'First value',
            },
            {
                value: 1,
                label: 'Second value',
            },
            {
                value: 2,
                label: 'Third value',
            },
        ],

        theme: 'info',
        disabled: true,
    },
};

export const Danger: Story = {
    args: {
        options: [
            {
                value: 0,
                label: 'First value',
            },
            {
                value: 1,
                label: 'Second value',
            },
            {
                value: 2,
                label: 'Third value',
            },
        ],

        size: 'big',
        theme: 'danger',
    },
};
