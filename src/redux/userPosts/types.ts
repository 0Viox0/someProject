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

export interface FetchPostsParams {
    page: number;
    limit: number;
    title?: string;
    userId?: string | number;
}
