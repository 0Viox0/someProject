import { useNavigate, useSearchParams } from 'react-router';
import { PostCard } from 'components/PostCard';
import { useState, useEffect } from 'react';
import { useDebounce, useAppSelector, useAppDispatch } from 'shared/hooks';
import { Loader, Button } from 'ui';
import { text } from 'shared/text';
import { PostCrudModal } from 'modules/posts/components';
import { PostsControls } from './components';
import { PostFilterParams } from './types/types';
import { ConfirmModal } from 'components/ConfirmModal';
import { Post } from 'modules/posts/types/types';
import { selectPosts } from 'modules/posts/store/selectors';
import {
    fetchPostsAsync,
    removePost,
    editPost,
} from 'modules/posts/store/thunk';

import './PostsList.scss';

const POST_LIMIT = 5;

export const PostsList = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [formValues, setFormValues] = useState<PostFilterParams>({
        postNameFilter: '',
        postAuthorFilter: searchParams.get('userId') ?? '',
    });
    const debouncedFormValues = useDebounce(formValues, 200);

    const { isError, errorMessage, isLoading, posts } =
        useAppSelector(selectPosts);
    const [page, setPage] = useState(1);

    const dispatch = useAppDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentChosenPost, setCurrentChosenPost] = useState<Post | null>(
        null,
    );
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [noMorePosts, setNoMorePosts] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        setSearchParams((prevValue) => {
            prevValue.set('userId', formValues.postAuthorFilter);
            return prevValue;
        });
    }, [formValues.postAuthorFilter, setSearchParams]);

    const handleFilterChange = <T extends keyof PostFilterParams>(
        filter: T,
        value: PostFilterParams[T],
    ) => {
        setFormValues((prevState) => ({
            ...prevState,
            [filter]: value,
        }));
    };

    const handleFetchMorePosts = async () => {
        const resultAction = await dispatch(
            fetchPostsAsync({
                limit: POST_LIMIT,
                page: page + 1,
                userId: debouncedFormValues.postAuthorFilter,
                title: debouncedFormValues.postNameFilter,
            }),
        );

        if (fetchPostsAsync.fulfilled.match(resultAction)) {
            const posts = resultAction.payload;

            if (posts.length < POST_LIMIT) {
                setNoMorePosts(true);
            }
        }

        setPage((prevPage) => prevPage + 1);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsDeleteModalOpen(false);
    };

    const handlePostDelete = (post: Post) => {
        setIsDeleteModalOpen(true);
        setCurrentChosenPost(post);
    };

    const handlePostEdit = (post: Post) => {
        setIsModalOpen(true);
        setCurrentChosenPost(post);
    };

    const handleDeleteAction = async () => {
        const resultAction = await dispatch(removePost(currentChosenPost.id));

        if (removePost.fulfilled.match(resultAction)) {
            setIsDeleteModalOpen(false);
        }
    };

    const handleEditAction = async (post: Post) => {
        setCurrentChosenPost(post);
        const resultAction = await dispatch(
            editPost({
                newPost: post,
                postToChangeId: post.id,
            }),
        );

        if (editPost.fulfilled.match(resultAction)) {
            setIsModalOpen(false);
        }
    };

    const handlePostViewComments = (postId: number) => {
        navigate(`/posts/${postId}`);
    };

    const renderPostContent = () => {
        if (isLoading && !posts.length) {
            return <Loader text={text.fetchingPosts} />;
        }

        if (((isError && !errorMessage) || !posts.length) && noMorePosts) {
            return <div className="error">{text.noPostsAvailable}</div>;
        }

        return (
            <>
                {posts.map((post) => (
                    <PostCard
                        key={post.id}
                        post={post}
                        onEdit={() => handlePostEdit(post)}
                        onDelete={() => handlePostDelete(post)}
                        onViewComments={() => handlePostViewComments(post.id)}
                    />
                ))}
                {!noMorePosts ? (
                    <Button
                        size="big"
                        loading={isLoading}
                        onClick={handleFetchMorePosts}
                    >
                        {text.loadMore}
                    </Button>
                ) : (
                    <div className="noPostsLeft">{text.noMorePosts}</div>
                )}
            </>
        );
    };

    return (
        <>
            <PostsControls
                setPage={setPage}
                setNoMorePosts={setNoMorePosts}
                paginationLimit={POST_LIMIT}
                formValues={formValues}
                handleFilterChange={handleFilterChange}
            />
            <div className="postsContainer">{renderPostContent()}</div>
            <ConfirmModal
                isOpen={isDeleteModalOpen}
                onCancel={handleCancel}
                onOk={handleDeleteAction}
                isLoadingButtons={isLoading}
                title={text.DELETE_MODAL.heading}
                secondaryText={text.DELETE_MODAL.warningText}
            />
            <PostCrudModal
                isOpen={isModalOpen}
                title={text.EDIT_MODAL.heading}
                actionButtonText={text.EDIT_MODAL.actionButtonText}
                onAction={handleEditAction}
                onCancel={handleCancel}
                predefinedPost={currentChosenPost}
            />
        </>
    );
};
