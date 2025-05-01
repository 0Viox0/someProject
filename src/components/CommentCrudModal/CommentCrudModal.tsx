import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Modal } from 'components/Modal';
import { FC, useEffect, useMemo, useState } from 'react';
import { Comment } from '@redux/post/types';
import { text } from 'shared/text/text';
import { Textarea } from 'components/Textarea';
import {
    CommentCrudModalProps,
    CommentFormErros,
    CommentFormValues,
} from './types';

import './CommentCrudModal.scss';

export const CommentCrudModal: FC<CommentCrudModalProps> = ({
    isOpen,
    title,
    onAction,
    onCancel,
    predefinedComment,
    footerButtonText,
    isLoading,
}) => {
    const initialFormErrors: Readonly<CommentFormErros> = useMemo(
        () => ({
            nameError: '',
            bodyError: '',
            emailError: '',
        }),
        [],
    );

    const [commentFormValues, setCommentFormValues] =
        useState<CommentFormValues>({
            name: predefinedComment?.name ?? '',
            email: predefinedComment?.email ?? '',
            commentBody: predefinedComment?.body ?? '',
        });
    const [commentFormErrors, setcommentFormErrors] =
        useState<CommentFormErros>(initialFormErrors);

    const handleCommentFormValuesChange = <T extends keyof CommentFormValues>(
        param: T,
        value: CommentFormValues[T],
    ) => {
        setCommentFormValues((prevState) => ({
            ...prevState,
            [param]: value,
        }));
    };

    const handleAction = () => {
        const newComment: Comment = {
            id: 0,
            name: commentFormValues.name,
            email: commentFormValues.email,
            body: commentFormValues.commentBody,
        };

        let isError = false;
        const errors: CommentFormErros = { ...initialFormErrors };

        if (!newComment.name) {
            errors.nameError = text.MODAL_ERRORS.COMMENTS.nameEmpty;
            isError = true;
        }

        if (!newComment.body) {
            errors.bodyError = text.MODAL_ERRORS.COMMENTS.bodyEmpty;
            isError = true;
        }

        const emailValidationRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!newComment.email) {
            isError = true;
            errors.emailError = text.MODAL_ERRORS.COMMENTS.emailEmpty;
        } else if (!emailValidationRegex.test(newComment.email)) {
            isError = true;
            errors.emailError = text.MODAL_ERRORS.COMMENTS.emailInvalid;
        }

        setcommentFormErrors(errors);

        if (!isError) {
            onAction(newComment);
        }
    };

    useEffect(() => {
        if (!isOpen) {
            setCommentFormValues({
                name: predefinedComment?.name ?? '',
                commentBody: predefinedComment?.body ?? '',
                email: predefinedComment?.email ?? '',
            });
            setcommentFormErrors(initialFormErrors);
        }
    }, [initialFormErrors, isOpen, predefinedComment]);

    return (
        <Modal
            title={title}
            isOpen={isOpen}
            onCancel={onCancel}
            theme="secondary"
            footer={
                <Button
                    theme="info"
                    size="big"
                    onClick={handleAction}
                    loading={isLoading}
                >
                    {footerButtonText}
                </Button>
            }
        >
            <div className="commentCreateModalInputsWrapper">
                <Input
                    className="commentModalInput"
                    value={commentFormValues.name}
                    onChange={(event) =>
                        handleCommentFormValuesChange(
                            'name',
                            event.target.value,
                        )
                    }
                    variant="filled"
                    theme="info"
                    label={text.COMMENTS_SECTION.title}
                    error={commentFormErrors.nameError}
                />
                <Input
                    className="commentModalInput"
                    value={commentFormValues.email}
                    onChange={(event) =>
                        handleCommentFormValuesChange(
                            'email',
                            event.target.value,
                        )
                    }
                    variant="filled"
                    theme="info"
                    label={text.COMMENTS_SECTION.email}
                    error={commentFormErrors.emailError}
                />
                <Textarea
                    value={commentFormValues.commentBody}
                    onChange={(event) =>
                        handleCommentFormValuesChange(
                            'commentBody',
                            event.target.value,
                        )
                    }
                    className="createModalTextarea"
                    error={commentFormErrors.bodyError}
                />
            </div>
        </Modal>
    );
};
