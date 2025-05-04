import { Post } from 'modules/posts/types/types';

export interface ActionFunction {
    (post: Post): void;
}

export interface PostCardProps {
    post: Post;
    onEdit?: ActionFunction;
    onDelete?: ActionFunction;
    onViewComments?: ActionFunction;
}
