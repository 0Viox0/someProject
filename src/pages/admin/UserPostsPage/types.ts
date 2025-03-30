export interface PostFilterParams {
    postNameFilter: string;
    postAuthorFilter: string;
}

export type PostFilterHandleFunction = <T extends keyof PostFilterParams>(
    filter: T,
    value: PostFilterParams[T],
) => void;
