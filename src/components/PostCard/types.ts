import { Post } from '@redux/userPosts/types';

export interface ActionFunction {
    (post: Post): void;
}

export interface PostCardProps {
    post: Post;
    onEdit?: ActionFunction;
    onDelete?: ActionFunction;
    onViewComments?: ActionFunction;
}
