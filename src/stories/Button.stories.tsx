import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'ui';
import { ComponentProps } from 'react';
import { fn } from '@storybook/test';
import ExpandErrorIcon from 'shared/assets/icons/ExpandArrow.svg';

type StoryProps = ComponentProps<typeof Button> & {
    innerText: string;
};

const meta = {
    component: Button,
    title: 'components/Button',
    parameters: {
        layout: 'centered',
    },
    args: {
        onClick: fn(),
    },
    argTypes: {
        innerText: {
            control: 'text',
        },
    },
    render: ({ innerText = 'Some text', ...args }) => (
        <Button {...args}>{innerText}</Button>
    ),
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        size: 'medium',
    },
};

export const Secondary: Story = {
    args: {
        size: 'small',
        theme: 'secondary',
    },
};

export const Info: Story = {
    args: {
        size: 'medium',
        theme: 'info',
        loading: true,
        innerText: 'Loading...',
    },
};

export const Danger: Story = {
    args: {
        size: 'medium',
        theme: 'danger',
        loading: false,
        icon: <ExpandErrorIcon />,
        iconPosition: 'right',
    },
};
