export interface PostFormErrors {
    titleError: string;
    bodyError: string;
    writteByError: string;
}

export type CommentFormErrors = {
    nameError: string;
    emailError: string;
    bodyError: string;
};

export type ValidateResultComment = {
    isError: boolean;
    errors: CommentFormErrors;
};

export type ValidateResultPost = {
    isError: boolean;
    errors: PostFormErrors;
};
