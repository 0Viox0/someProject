export type Post = {
    id: number;
    userId: number;
    title: string;
    content: string;
    author: string;
    body: string;
};

export interface PostsState {
    posts: Post[];
    isLoading: boolean;
    isError: boolean;
    page: number;
    limit: number;
}
