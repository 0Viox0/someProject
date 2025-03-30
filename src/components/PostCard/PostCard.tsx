import { FC } from 'react';
import { PostCardProps } from './types';
import { useTheme } from 'features/darkTheme';
import classNames from 'classnames';
import { PostActionButton } from 'components/PostActionButton';

import CommentIcon from 'shared/assets/icons/Comment.svg';
import EditIcon from 'shared/assets/icons/Edit.svg';
import TrashIcon from 'shared/assets/icons/Trash.svg';

import './PostCard.scss';

export const PostCard: FC<PostCardProps> = ({
    post,
    onDelete,
    onEdit,
    onViewComments,
}) => {
    const { theme } = useTheme();

    return (
        <div className={classNames('postWrapper', theme)}>
            <div className="actualPostWrapper">
                <h3 className="postHeading">{post.title}</h3>
                <p className="postContent">{post.body}</p>
                <span className="author">By @{post.author}</span>
            </div>
            <div className="buttonsWrapper">
                <div className="upperButtonWrapper">
                    <PostActionButton
                        icon={<EditIcon />}
                        colorTheme="transparent"
                        onClick={() => onEdit(post)}
                    />
                    <PostActionButton
                        icon={<TrashIcon />}
                        colorTheme="danger"
                        onClick={() => onDelete(post)}
                    />
                </div>
                <PostActionButton
                    icon={<CommentIcon />}
                    colorTheme="info"
                    onClick={() => onViewComments(post)}
                />
            </div>
        </div>
    );
};
