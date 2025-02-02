import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from 'components/Checkbox';

const meta = {
    component: Checkbox,
    title: 'components/Checkbox',
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: { checked: true, text: 'Some text' },
};
