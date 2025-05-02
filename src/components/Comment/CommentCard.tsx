import { FC, useState } from 'react';
import { Comment } from '@redux/post/types';
import { IconButton } from 'components/IconButton';
import { useAppDispatch } from 'shared/hooks';
import { text } from 'shared/text/text';
import { deleteComment, editComment } from '@redux/post/thunk';
import { CommentCrudModal } from 'components/CommentCrudModal';
import { ConfirmModal } from 'features/posts/components';

import EditIcon from 'shared/assets/icons/Edit.svg';
import TrashIcon from 'shared/assets/icons/Trash.svg';

import './CommentCard.scss';

export type CommentProps = {
    comment: Comment;
};

export const CommentCard: FC<CommentProps> = ({ comment }) => {
    const dispatch = useAppDispatch();
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isEditingModalOpen, setIsEditingModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleEditComment = () => {
        setIsEditingModalOpen(true);
    };

    const handleEditCommentAction = async (newComment: Comment) => {
        setIsLoading(true);

        const resultAction = await dispatch(
            editComment({ commentIdToChange: comment.id, newComment }),
        );

        if (editComment.fulfilled.match(resultAction)) {
            setIsEditingModalOpen(false);
        }

        setIsLoading(false);
    };

    const handleDeleteComment = () => {
        setDeleteModalOpen(true);
    };

    const handleDeleteAction = async () => {
        setIsLoading(true);

        const resultAction = await dispatch(deleteComment(comment.id));

        if (deleteComment.fulfilled.match(resultAction)) {
            setDeleteModalOpen(false);
        }

        setIsLoading(false);
    };

    const handleCancel = () => {
        setDeleteModalOpen(false);
        setIsEditingModalOpen(false);
    };

    return (
        <div className="commentWrapper">
            <div className="commentHeading">
                <div className="commentHeadingUserWrapper">
                    <div className="profilePicture" />
                    <div className="commentUserIdentity">
                        <div className="commentUsername">{comment.name}</div>
                        <div className="commentEmail">{comment.email}</div>
                    </div>
                </div>
                <div className="commentCardActionButtonsWrapper">
                    <IconButton
                        icon={<EditIcon />}
                        colorTheme="transparent"
                        onClick={handleEditComment}
                    />
                    <IconButton
                        icon={<TrashIcon />}
                        colorTheme="danger"
                        onClick={handleDeleteComment}
                    />
                </div>
            </div>
            <p className="commentItself">{comment.body}</p>
            <ConfirmModal
                isOpen={isDeleteModalOpen}
                onCancel={handleCancel}
                onOk={handleDeleteAction}
                title={text.COMMENTS_SECTION.deleteComment}
                secondaryText={text.COMMENTS_SECTION.areYouSure}
                isLoadingButtons={isLoading}
            />
            <CommentCrudModal
                isOpen={isEditingModalOpen}
                onCancel={handleCancel}
                title={text.COMMENTS_SECTION.editComment}
                onAction={handleEditCommentAction}
                predefinedComment={comment}
                isLoading={isLoading}
                footerButtonText={text.COMMENTS_SECTION.edit}
            />
        </div>
    );
};
