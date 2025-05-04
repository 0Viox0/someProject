import { useState } from 'react';
import { text } from 'shared/text/text';
import { useAppDispatch } from 'shared/hooks';
import { PostCrudModal } from '../PostCrudModal';
import { Button } from 'ui';
import { createPostAsync } from 'modules/posts/store/userPosts/thunk';
import { Post } from 'modules/posts/types/types';

import './NewPostButtonWrapper.scss';

export const NewPostButtonWrapper = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useAppDispatch();

    const handleButtonClick = () => {
        setIsOpen(true);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const handleCreatePost = async (post: Post) => {
        const resultAction = await dispatch(
            createPostAsync({
                title: post.title,
                body: post.body,
                writtenBy: post.author,
            }),
        );

        if (createPostAsync.fulfilled.match(resultAction)) {
            setIsOpen(false);
        }
    };

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
            <PostCrudModal
                isOpen={isOpen}
                title={text.CREATE_MODAL.heading}
                onAction={handleCreatePost}
                onCancel={handleCancel}
                actionButtonText={text.CREATE_MODAL.create}
            />
        </>
    );
};
