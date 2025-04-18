import { FC, useEffect, useMemo, useState } from 'react';
import { Post } from '@redux/userPosts/types';
import { Modal } from 'components/Modal';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';
import { text } from 'shared/text/text';
import { FormErrors, FormValues } from 'features/posts/types/types';
import { useAppSelector } from 'shared/hooks';
import { selectPosts } from '@redux/userPosts/selectors';

import './PostCrudModal.scss';

export type PostCrudModalProps = {
    isOpen: boolean;
    title: string;
    actionButtonText: string;
    onAction: (post: Post) => void;
    onCancel: () => void;
    predefinedPost?: Post;
};

export const PostCrudModal: FC<PostCrudModalProps> = ({
    title,
    actionButtonText,
    isOpen,
    onAction,
    onCancel,
    predefinedPost,
}) => {
    const initialFormErrors: Readonly<FormErrors> = useMemo(
        () => ({
            titleError: '',
            bodyError: '',
            writteByError: '',
        }),
        [],
    );

    const [formValue, setFormValue] = useState<FormValues>({
        title: predefinedPost?.title ?? '',
        body: predefinedPost?.body ?? '',
        writtenBy: predefinedPost?.author.split(/[\s@]+/).at(-1) ?? '',
    });
    const [formErrors, setFormErrors] = useState<FormErrors>(initialFormErrors);

    const { errorMessage, isLoading } = useAppSelector(selectPosts);

    const handleFormValueChange = <T extends keyof FormValues>(
        filter: T,
        value: FormValues[T],
    ) => {
        setFormValue((prevState) => ({
            ...prevState,
            [filter]: value,
        }));
    };

    const handleCancel = () => {
        onCancel();
    };

    const handleAction = () => {
        setFormErrors(initialFormErrors);

        const newPost: Post = {
            id: predefinedPost?.id ?? -1,
            userId: predefinedPost?.userId ?? -1,
            title: formValue.title,
            author: formValue.writtenBy,
            body: formValue.body,
        };

        const errors: FormErrors = { ...initialFormErrors };
        let isError = false;

        if (!newPost.title) {
            isError = true;
            errors.titleError = text.MODAL_ERRORS.POSTS.titleEmpty;
        }

        if (!newPost.body) {
            isError = true;
            errors.bodyError = text.MODAL_ERRORS.POSTS.bodyEmpty;
        }

        if (!newPost.author) {
            isError = true;
            errors.writteByError = text.MODAL_ERRORS.POSTS.authorEmpty;
        }

        setFormErrors(errors);

        if (!isError) {
            onAction(newPost);
        }
    };

    useEffect(() => {
        if (predefinedPost) {
            setFormValue({
                title: predefinedPost.title,
                body: predefinedPost.body,
                writtenBy: predefinedPost.author.split(/[\s@]+/).at(-1),
            });
        }
    }, [predefinedPost]);

    useEffect(() => {
        if (!isOpen) {
            setFormValue({
                title: predefinedPost?.title ?? '',
                body: predefinedPost?.body ?? '',
                writtenBy: predefinedPost?.author ?? '',
            });
            setFormErrors(initialFormErrors);
        }
    }, [initialFormErrors, isOpen, predefinedPost]);

    return (
        <Modal
            title={title}
            isOpen={isOpen}
            onCancel={handleCancel}
            theme="secondary"
            footer={
                <Button
                    theme="info"
                    size="small"
                    onClick={handleAction}
                    loading={isLoading}
                >
                    {actionButtonText}
                </Button>
            }
        >
            <div className="createModalInputsWrapper">
                <Input
                    value={formValue.title}
                    onChange={(event) =>
                        handleFormValueChange('title', event.target.value)
                    }
                    variant="filled"
                    theme="info"
                    label={text.CREATE_MODAL.title}
                    error={formErrors.titleError}
                />
                <Textarea
                    value={formValue.body}
                    onChange={(event) =>
                        handleFormValueChange('body', event.target.value)
                    }
                    className="createModalTextarea"
                    error={formErrors.bodyError}
                />
                <Input
                    value={formValue.writtenBy}
                    onChange={(event) =>
                        handleFormValueChange('writtenBy', event.target.value)
                    }
                    variant="outlined"
                    theme="secondary"
                    label={text.CREATE_MODAL.writtenBy}
                    error={formErrors.writteByError || errorMessage}
                />
            </div>
        </Modal>
    );
};
