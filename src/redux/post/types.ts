import { Post } from '@redux/userPosts/types';
import { User } from '@redux/users/types';

export type Comment = {
    id: number;
    name: string;
    email: string;
    body: string;
};

export type PostState = {
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
