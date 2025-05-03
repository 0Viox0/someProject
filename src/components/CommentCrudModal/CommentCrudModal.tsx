import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Modal } from 'components/Modal';
import { FC, useEffect, useMemo, useState } from 'react';
import { Comment } from '@redux/post/types';
import { text } from 'shared/text/text';
import { Textarea } from 'components/Textarea';
import { CommentCrudModalProps, CommentFormValues } from './types';
import { CommentFormErros, validateEntity } from 'features/validation';

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
    const [commentFormErrors, setCommentFormErrors] =
        useState<CommentFormErros>(initialFormErrors);

    useEffect(() => {
        if (!isOpen) {
            setCommentFormValues({
                name: predefinedComment?.name ?? '',
                commentBody: predefinedComment?.body ?? '',
                email: predefinedComment?.email ?? '',
            });
            setCommentFormErrors(initialFormErrors);
        }
    }, [initialFormErrors, isOpen, predefinedComment]);

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

        const { errors, isError } = validateEntity(newComment);

        setCommentFormErrors(errors);

        if (!isError) {
            onAction(newComment);
        }
    };

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
