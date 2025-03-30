export type Post = {
    id: number;
    userId: number;
    title: string;
    author: string;
    body: string;
};

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
