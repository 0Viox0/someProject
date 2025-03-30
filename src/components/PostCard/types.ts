import { Post } from '@redux/userPosts/types';
import { ButtonHTMLAttributes, ReactNode } from 'react';

export interface ActionFunction {
    (post: Post): void;
}

export interface PostCardProps {
    post: Post;
    onEdit?: ActionFunction;
    onDelete?: ActionFunction;
    onViewComments?: ActionFunction;
}

export interface PostActionButtonProps
    extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon: ReactNode;
    colorTheme: 'transparent' | 'danger' | 'info';
}
