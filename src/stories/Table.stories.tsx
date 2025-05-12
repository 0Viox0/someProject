import type { Meta, StoryObj } from '@storybook/react';
import { Table } from 'ui';
import { City, columns, dataSource } from './data';
import { ComponentProps } from 'react';

type StorybookProps = ComponentProps<typeof Table<City>>;

const meta = {
    component: Table,
    title: 'components/Table',
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StorybookProps>;

export default meta;

type Story = StoryObj<StorybookProps>;

export const Primary: Story = {
    args: {
        columns: columns,
        dataSource: dataSource,
        pageLimit: 7,
        theme: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        columns: columns,
        dataSource: dataSource.slice(0, 15),
        pageLimit: 3,
        theme: 'secondary',
        size: 'small',
    },
};

export const Info: Story = {
    args: {
        columns: columns,
        dataSource: dataSource.slice(0, 8),
        theme: 'info',
    },
};

export const Danger: Story = {
    args: {
        columns: columns,
        dataSource: dataSource.slice(0, 3),
        theme: 'danger',
        size: 'big',
    },
};
