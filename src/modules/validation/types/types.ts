export interface PostFormErrors {
    titleError: string;
    bodyError: string;
    writteByError: string;
}

export type CommentFormErros = {
    nameError: string;
    emailError: string;
    bodyError: string;
};

export type ValidateResultComment = {
    isError: boolean;
    errors: CommentFormErros;
};

export type ValidateResultPost = {
    isError: boolean;
    errors: PostFormErrors;
};
