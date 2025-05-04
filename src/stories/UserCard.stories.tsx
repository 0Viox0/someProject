import type { Meta, StoryObj } from '@storybook/react';
import { UserCard } from 'components/UserCard';
import { ThemeProvider } from 'modules/darkTheme';
import { User } from 'modules/user';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof UserCard>;

const mockUser: User = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496',
        },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
    },
};

const meta = {
    component: UserCard,
    title: 'Components/UserCard',
    args: {
        user: mockUser,
    },
    parameters: {
        layout: 'centered',
    },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const DarkTheme: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
};

export const LightTheme: Story = {
    args: {},
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
};
