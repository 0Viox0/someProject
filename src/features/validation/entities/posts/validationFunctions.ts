import { Post } from '@redux/userPosts/types';
import {
    PostFormErrors,
    ValidateResultPost,
} from 'features/validation/types/types';
import { text } from 'shared/text/text';

export const initialFormErrorsPosts: Readonly<PostFormErrors> = {
    bodyError: '',
    titleError: '',
    writteByError: '',
};

export const validatePost = (post: Post): ValidateResultPost => {
    const errors: PostFormErrors = { ...initialFormErrorsPosts };
    let isError = false;

    if (!post.title) {
        isError = true;
        errors.titleError = text.MODAL_ERRORS.POSTS.titleEmpty;
    }

    if (!post.body) {
        isError = true;
        errors.bodyError = text.MODAL_ERRORS.POSTS.bodyEmpty;
    }

    if (!post.author) {
        isError = true;
        errors.writteByError = text.MODAL_ERRORS.POSTS.authorEmpty;
    }

    return { isError, errors };
};
