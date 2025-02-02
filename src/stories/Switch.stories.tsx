import type { Meta, StoryObj } from '@storybook/react';

import { Switch } from 'components/Switch';

// TODO:  _variables.scss  thingy

const meta = {
    component: Switch,
    title: 'components/Switch',
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
