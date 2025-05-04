import { Comment } from 'modules/comment/store/types';
import {
    CommentFormErros,
    ValidateResultComment,
} from 'modules/validation/types/types';
import { text } from 'shared/text/text';

export const initialFormErrorsComments: Readonly<CommentFormErros> = {
    bodyError: '',
    emailError: '',
    nameError: '',
};

export const validateComment = (comment: Comment): ValidateResultComment => {
    let isError = false;
    const errors: CommentFormErros = { ...initialFormErrorsComments };

    if (!comment.name) {
        errors.nameError = text.MODAL_ERRORS.COMMENTS.nameEmpty;
        isError = true;
    }

    if (!comment.body) {
        errors.bodyError = text.MODAL_ERRORS.COMMENTS.bodyEmpty;
        isError = true;
    }

    const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!comment.email) {
        isError = true;
        errors.emailError = text.MODAL_ERRORS.COMMENTS.emailEmpty;
    } else if (!emailValidationRegex.test(comment.email)) {
        isError = true;
        errors.emailError = text.MODAL_ERRORS.COMMENTS.emailInvalid;
    }

    return { isError, errors };
};
