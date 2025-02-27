import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PostCard } from 'components/PostCard';
import { Post } from 'components/PostCard/types';
import { ThemeProvider } from 'features/darkTheme';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof PostCard>;

const mockPost: Post = {
    title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    content:
        'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
    author: 'By @<name>',
};

const meta = {
    component: PostCard,
    title: 'Components/PostCard',
    parameters: {
        layout: 'centered',
    },
    args: {
        post: mockPost,
        onDelete: fn(),
        onEdit: fn(),
        onViewComments: fn(),
    },
} satisfies Meta<StoryProps>;

export default meta;

type Story = StoryObj<StoryProps>;

export const DarkTheme: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider initialTheme="dark">
                <Story />
            </ThemeProvider>
        ),
    ],
};
export const LightTheme: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider initialTheme="light">
                <Story />
            </ThemeProvider>
        ),
    ],
};
