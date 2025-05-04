import { text } from 'shared/text/text';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectPost } from '@redux/post/selectors';
import { useState } from 'react';
import { Comment, CommentCreationDto } from '@redux/post/types';
import { createComment } from '@redux/post/thunk';
import { Loader, Button } from 'ui';
import { CommentCard } from 'modules/Comment';
import { CommentCrudModal } from 'modules/CommentCrudModal';

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

    const renderContent = () => {
        if (isLoading || !comments) {
            return <Loader />;
        } else if (!comments.length) {
            return (
                <div className="commentSectionErrorMessage">
                    {text.COMMENTS_SECTION.noCommentsFound}
                </div>
            );
        } else {
            return comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment} />
            ));
        }
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
            <div className="postSectionCommentsWrapper">{renderContent()}</div>
            <CommentCrudModal
                isOpen={isModalOpen}
                onCancel={handleCancel}
                title={text.COMMENTS_SECTION.newComment}
                onAction={handleCreateNewCommentAction}
                isLoading={isCreatingLoading}
                footerButtonText={text.COMMENTS_SECTION.create}
            />
        </>
    );
};
