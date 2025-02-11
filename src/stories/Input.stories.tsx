import type { Meta, StoryObj } from '@storybook/react';

import { Input } from 'components/Input/Input';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof Input>;

const meta = {
    component: Input,
    title: 'components/Input',
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        value: {
            control: 'text',
            description: 'text inside of the input',
        },
    },
    render: ({ value, ...args }) => <Input {...args} value={value} />,
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const Primary: Story = {
    args: {
        size: 'medium',
        theme: 'primary',
        inputType: 'text',
        variant: 'filled',
        label: 'something',
        error: 'this is some error',
    },
};

export const Secondary: Story = {
    args: {
        size: 'small',
        theme: 'secondary',
        inputType: 'text',
        variant: 'filled',
        label: '1',
        error: '',
        value: 'Some input in the field',
    },
};

export const Info: Story = {
    args: {
        size: 'big',
        theme: 'info',
        inputType: 'password',
        variant: 'outlined',
        label: 'password:',
        error: '',
        value: 'somepassword',
    },
};

export const Danger: Story = {
    args: {
        size: 'medium',
        theme: 'danger',
        inputType: 'email',
        variant: 'outlined',
        label: 'something',
        error: 'this is some error',
        value: 'asdsdfsdfsdfsdfsdf',
    },
};
