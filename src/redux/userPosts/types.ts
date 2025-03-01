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
}
