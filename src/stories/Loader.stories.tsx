import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from 'ui';
import { ComponentProps } from 'react';

type StorybookProps = ComponentProps<typeof Loader>;

const meta = {
    component: Loader,
    title: 'components/Loader',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StorybookProps>;

export default meta;

type Story = StoryObj<StorybookProps>;

export const Primary: Story = {
    args: {
        theme: 'primary',
        text: 'Loading something',
        loaderShape: 'dots',
        size: 'medium',
    },
};
export const Secondary: Story = {
    args: {
        animationSeed: 113,
        theme: 'secondary',
        size: 'small',
    },
};
export const Info: Story = {
    args: {
        theme: 'info',
        loaderShape: 'circle',
        className: '',
        animationSeed: 20,
        text: 'Loading another thing',
    },
};
export const Danger: Story = {
    args: {
        loaderShape: 'circle',
        text: 'Some text',
        theme: 'danger',
        size: 'big',
    },
};
