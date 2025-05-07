export interface FormValues {
    title: string;
    body: string;
    writtenBy: string;
}

export type Post = {
    id: number;
    userId: number;
    title: string;
    author: string;
    body: string;
};
