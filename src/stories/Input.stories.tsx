import type { Meta, StoryObj } from '@storybook/react';

import { Input } from 'components/Input/Input';

const meta = {
    component: Input,
    title: 'something',
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        size: 'medium',
        theme: 'primary',
        inputType: 'text',
        variant: 'filled',
        label: 'something',
        error: 'this is some error',
    },
};
