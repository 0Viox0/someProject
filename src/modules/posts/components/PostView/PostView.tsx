import { useParams } from 'react-router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { Loader } from 'ui';
import { text } from 'shared/text/text';
import { selectPost } from 'modules/comment/store/selectors';
import {
    fetchPost,
    fetchPostAuthor,
    fetchPostComments,
} from 'modules/comment/store/thunk';

import './PostView.scss';

export const PostView = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const { isLoading, post, author, isError } = useAppSelector(selectPost);

    const isValidPathParam = id !== undefined && !isNaN(Number(id));

    useEffect(() => {
        const fetchData = async () => {
            if (isValidPathParam) {
                dispatch(fetchPost(Number(id)));
            }
        };

        fetchData();
    }, [dispatch, id, isValidPathParam]);

    useEffect(() => {
        if (post) {
            dispatch(fetchPostComments(post.id));
            dispatch(fetchPostAuthor(post.userId));
        }
    }, [dispatch, post]);

    if (isError) {
        return (
            <div className="postViewErrorMessage">
                {text.POST_PAGE.invalidPostId}
            </div>
        );
    }

    if (isLoading || !post) {
        return <Loader className="postViewLoader" />;
    }

    return (
        <div className="fullPostWrapper">
            <h2 className="postTitle">{post.title}</h2>
            <p className="postContent">{post.body}</p>
            {author && (
                <div className="writtenBy">
                    {text.POST_PAGE.writtenBy} {author.name}{' '}
                    <span className="username">@{author.username}</span>
                </div>
            )}
        </div>
    );
};
