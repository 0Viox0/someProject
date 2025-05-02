import { text } from 'shared/text/text';
import { Button } from 'components/Button';
import { ReactNode, useEffect, useState } from 'react';
import { PostFilterParams } from './types';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectPosts } from '@redux/userPosts/selectors';
import { editPost, fetchPostsAsync, removePost } from '@redux/userPosts/thunk';
import { Loader } from 'components/Loader';
import { PostCard } from 'components/PostCard';
import { useDebounce } from 'shared/hooks/useDebounce';
import { useNavigate, useSearchParams } from 'react-router';
import { ConfirmModal, PostCrudModal } from 'features/posts/components';
import { Post } from '@redux/userPosts/types';
import { PostsControls } from './PostsControls/PostsControls';

import './UserPostsPage.scss';

const POST_LIMIT = 5;

export const UserPostsPage = () => {
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

    let postContent: ReactNode;

    if (isLoading && !posts.length) {
        postContent = <Loader text={text.fetchingPosts} />;
    } else if (((isError && !errorMessage) || !posts.length) && noMorePosts) {
        postContent = <div className="error">{text.noPostsAvailable}</div>;
    } else {
        postContent = (
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
    }

    return (
        <div className={'userPostPage'}>
            <h2 className="userPostsHeader">{text.userPosts}</h2>
            <PostsControls
                setPage={setPage}
                setNoMorePosts={setNoMorePosts}
                paginationLimit={POST_LIMIT}
                formValues={formValues}
                handleFilterChange={handleFilterChange}
            />
            <div className="postsContainer">{postContent}</div>
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
        </div>
    );
};
