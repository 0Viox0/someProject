import { ButtonHTMLAttributes, ReactNode } from 'react';

export type Post = {
    title: string;
    content: string;
    author: string;
};

export interface PostCardProps {
    post: Post;
    onEdit?: () => void;
    onDelete?: () => void;
    onViewComments?: () => void;
}

export interface PostActionButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    colorTheme: 'transparent' | 'danger' | 'info';
}
