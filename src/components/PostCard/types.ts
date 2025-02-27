import { Post } from '@redux/userPosts/types';
import { ButtonHTMLAttributes, ReactNode } from 'react';

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
