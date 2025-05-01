import { FC } from 'react';
import { PostCardProps } from './types';
import { IconButton } from 'components/IconButton';

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
    return (
        <div className={'postWrapper'}>
            <div className="actualPostWrapper">
                <h3 className="postHeading">{post.title}</h3>
                <p className="postContent">{post.body}</p>
                <span className="author">By @{post.author}</span>
            </div>
            <div className="buttonsWrapper">
                <div className="upperButtonWrapper">
                    <IconButton
                        icon={<EditIcon />}
                        colorTheme="transparent"
                        onClick={() => onEdit(post)}
                    />
                    <IconButton
                        icon={<TrashIcon />}
                        colorTheme="danger"
                        onClick={() => onDelete(post)}
                    />
                </div>
                <IconButton
                    icon={<CommentIcon />}
                    colorTheme="info"
                    onClick={() => onViewComments(post)}
                />
            </div>
        </div>
    );
};
