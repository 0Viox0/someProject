import { Post } from 'modules/posts/types/types';

export interface PostsState {
    posts: Post[];
    isLoading: boolean;
    isError: boolean;
    errorMessage: string;
}

export type PostCreationDto = {
    title: string;
    body: string;
    writtenBy: string;
};

export type PostEditDto = {
    postToChangeId: number;
    newPost: Post;
};

export interface FetchPostsParams {
    page: number;
    limit: number;
    title?: string;
    userId?: string | number;
}

export type PostCreateResponseType = {
    body: string;
    id: number;
    title: string;
    userId: number;
};
