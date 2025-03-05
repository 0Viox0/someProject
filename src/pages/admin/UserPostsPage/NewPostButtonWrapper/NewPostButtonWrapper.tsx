import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { useEffect, useState } from 'react';
import { text } from 'shared/text/text';
import { Input } from 'components/Input';
import { Textarea } from 'components/Textarea';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectPosts } from '@redux/userPosts/selectors';
import { createPostAsync } from '@redux/userPosts/thunk';

import './NewPostButtonWrapper.scss';

export interface FormValues {
    title: string;
    body: string;
    writtenBy: string;
}

export const NewPostButtonWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [formValue, setFormValue] = useState<FormValues>({
        title: '',
        body: '',
        writtenBy: '',
    });
    const { errorMessage, isLoading, posts } = useAppSelector(selectPosts);
    const dispatch = useAppDispatch();
    const [prevPostCount, setPrevPostCount] = useState(posts.length);

    const handleFormValueChange = <T extends keyof FormValues>(
        filter: T,
        value: FormValues[T],
    ) => {
        setFormValue((prevState) => ({
            ...prevState,
            [filter]: value,
        }));
    };

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const handleCreatePost = () => {
        setPrevPostCount(posts.length);
        dispatch(
            createPostAsync({
                title: formValue.title,
                body: formValue.body,
                writtenBy: formValue.writtenBy,
            }),
        );
    };

    useEffect(() => {
        if (posts.length > prevPostCount) {
            setIsOpen(false);
        }
    }, [posts.length, prevPostCount]);

    return (
        <>
            <Button
                size="small"
                theme="info"
                onClick={handleButtonClick}
                className="createNewPostButton"
            >
                {text.newPost}
            </Button>
            <Modal
                title={text.CREATE_MODAL.heading}
                isOpen={isOpen}
                onCancel={handleCancel}
                theme="secondary"
                footer={
                    <Button
                        theme="info"
                        size="small"
                        onClick={handleCreatePost}
                        loading={isLoading}
                    >
                        {text.CREATE_MODAL.create}
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
                    />
                    <Textarea
                        value={formValue.body}
                        onChange={(event) =>
                            handleFormValueChange('body', event.target.value)
                        }
                        className="createModalTextarea"
                    />
                    <Input
                        value={formValue.writtenBy}
                        onChange={(event) =>
                            handleFormValueChange(
                                'writtenBy',
                                event.target.value,
                            )
                        }
                        variant="outlined"
                        theme="secondary"
                        label={text.CREATE_MODAL.writtenBy}
                        error={errorMessage}
                    />
                </div>
            </Modal>
        </>
    );
};
