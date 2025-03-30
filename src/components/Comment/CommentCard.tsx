import { FC, useState } from 'react';
import { Comment } from '@redux/post/types';
import classNames from 'classnames';
import { useTheme } from 'features/darkTheme';
import { PostActionButton } from 'components/PostActionButton';
import { useAppDispatch } from 'shared/hooks';
import { Button } from 'components/Button';
import { Modal } from 'components/Modal';
import { text } from 'shared/text/text';
import { deleteComment, editComment } from '@redux/post/thunk';
import { CommentCrudModal } from 'components/CommentCrudModal';

import EditIcon from 'shared/assets/icons/Edit.svg';
import TrashIcon from 'shared/assets/icons/Trash.svg';

import './CommentCard.scss';

export type CommentProps = {
    comment: Comment;
};

export const CommentCard: FC<CommentProps> = ({ comment }) => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [isEditingCommentModalOpen, setIsEditingCommentModalOpen] =
        useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleEditComment = () => {
        setIsEditingCommentModalOpen(true);
    };

    const handleEditCommentAction = async (newComment: Comment) => {
        setIsLoading(true);

        const resultAction = await dispatch(
            editComment({ commentIdToChange: comment.id, newComment }),
        );

        if (editComment.fulfilled.match(resultAction)) {
            setIsEditingCommentModalOpen(false);
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
        setIsEditingCommentModalOpen(false);
    };

    return (
        <div className="commentWrapper">
            <div className="commentHeading">
                <div className="commentHeadingUserWrapper">
                    <div className="profilePicture"></div>
                    <div className="commentUserIdentity">
                        <div className="commentUsername">{comment.name}</div>
                        <div className={classNames('commentEmail', theme)}>
                            {comment.email}
                        </div>
                    </div>
                </div>
                <div className="commentCardActionButtonsWrapper">
                    <PostActionButton
                        icon={<EditIcon />}
                        colorTheme="transparent"
                        onClick={handleEditComment}
                    />
                    <PostActionButton
                        icon={<TrashIcon />}
                        colorTheme="danger"
                        onClick={handleDeleteComment}
                    />
                </div>
            </div>
            <p className="commentItself">{comment.body}</p>
            <Modal
                isOpen={isDeleteModalOpen}
                onCancel={handleCancel}
                theme="danger"
                title={text.COMMENTS_SECTION.deleteComment}
                footer={
                    <div className="deleteModalFooterButtonsWrapper">
                        <Button
                            theme="info"
                            size="small"
                            onClick={handleDeleteAction}
                            loading={isLoading}
                        >
                            {text.DELETE_MODAL.yes}
                        </Button>
                        <Button
                            theme="primary"
                            size="small"
                            onClick={handleCancel}
                            disabled={isLoading}
                        >
                            {text.DELETE_MODAL.no}
                        </Button>
                    </div>
                }
            >
                <div className="warningTextWrapper">
                    <div className="modalDeleteWarningText">
                        {text.COMMENTS_SECTION.areYouSure}
                    </div>
                </div>
            </Modal>
            <CommentCrudModal
                isOpen={isEditingCommentModalOpen}
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
