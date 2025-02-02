import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from 'components/Radio';

const meta = {
    component: Radio,
    title: 'components/Radio',
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'medium',
        options: [
            { value: 1, label: 'First option' },
            { value: 2, label: 'Second option' },
            { value: 3, label: 'Third option' },
        ],
    },
};
