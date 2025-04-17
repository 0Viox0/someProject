import { text } from 'shared/text/text';
import { Button } from 'components/Button';
import { CommentCard } from 'components/Comment';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectPost } from '@redux/post/selectors';
import { Loader } from 'components/Loader';
import { CommentCrudModal } from 'components/CommentCrudModal';
import { useState } from 'react';
import { Comment, CommentCreationDto } from '@redux/post/types';
import { createComment } from '@redux/post/thunk';

import './CommentsSectionWrapper.scss';

export const CommentsSectionWrapper = () => {
    const { comments, isLoading } = useAppSelector(selectPost);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useAppDispatch();
    const [isCreatingLoading, setIsCreatingLoading] = useState(false);

    const handleNewCommentClick = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleCreateNewCommentAction = async (newComment: Comment) => {
        setIsCreatingLoading(true);

        const commentCreationDto: CommentCreationDto = {
            body: newComment.body,
            email: newComment.email,
            name: newComment.name,
        };

        const resultAction = await dispatch(createComment(commentCreationDto));

        if (createComment.fulfilled.match(resultAction)) {
            setIsModalOpen(false);
        }

        setIsCreatingLoading(false);
    };

    return (
        <>
            <div className="commentsHeading">
                <div className="commentsHeadingText">
                    {text.COMMENTS_SECTION.heading}
                </div>
                <Button theme="info" onClick={handleNewCommentClick}>
                    {text.COMMENTS_SECTION.newComment}
                </Button>
            </div>
            <div className="postSectionCommentsWrapper">
                {isLoading || !comments ? (
                    <Loader />
                ) : !comments.length ? (
                    <div className="commentSectionErrorMessage">
                        {text.COMMENTS_SECTION.noCommentsFound}
                    </div>
                ) : (
                    comments.map((comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))
                )}
            </div>
            <CommentCrudModal
                isOpen={isModalOpen}
                onCancel={handleCancel}
                title={text.COMMENTS_SECTION.editComment}
                onAction={handleCreateNewCommentAction}
                isLoading={isCreatingLoading}
                footerButtonText={text.COMMENTS_SECTION.create}
            />
        </>
    );
};
