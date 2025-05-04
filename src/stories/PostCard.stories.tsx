import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PostCard } from 'components/PostCard';
import { ThemeProvider } from 'modules/darkTheme';
import { Post } from 'modules/posts/types/types';
import { ComponentProps } from 'react';

type StoryProps = ComponentProps<typeof PostCard>;

const mockPost: Post = {
    id: 0,
    userId: 0,
    title: 'Sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    body: 'ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae',
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
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
};
export const LightTheme: Story = {
    decorators: [
        (Story) => (
            <ThemeProvider>
                <Story />
            </ThemeProvider>
        ),
    ],
};
