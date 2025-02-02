import type { Meta, StoryObj } from '@storybook/react';

import { Select } from 'components/Select';

const meta = {
    component: Select,
    title: 'components/Select',
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '150px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
    },
};
