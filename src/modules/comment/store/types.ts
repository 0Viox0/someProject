import { Post } from 'modules/posts/types/types';
import { User } from 'modules/user';

export type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
};

export type PostCommentsState = {
    post: Post | null;
    author: User | null;
    comments: Comment[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
};

export type CommentCreationDto = {
    name: string;
    email: string;
    body: string;
};
