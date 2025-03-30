import { text } from 'shared/text/text';
import { useTheme } from 'features/darkTheme';
import classNames from 'classnames';
import { Button } from 'components/Button';
import { useEffect, useState } from 'react';
import { PostFilterParams } from './types';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectPosts } from '@redux/userPosts/selectors';
import { editPost, fetchPostsAsync, removePost } from '@redux/userPosts/thunk';
import { Loader } from 'components/Loader';
import { PostCard } from 'components/PostCard';
import { useDebouncedValue } from 'shared/hooks/useDebouncedValue';
import { useNavigate, useSearchParams } from 'react-router';
import { PostCrudModal } from 'features/posts/components';
import { Post } from '@redux/userPosts/types';
import { PostsControls } from './PostsControls/PostsControls';
import { Modal } from 'components/Modal';

import './UserPostsPage.scss';

export const UserPostsPage = () => {
    const { theme } = useTheme();
    const [searchParams, setSearchParams] = useSearchParams();

    const [formValues, setFormValues] = useState<PostFilterParams>({
        postNameFilter: '',
        postAuthorFilter: searchParams.get('userId'),
    });
    const debouncedFormValues = useDebouncedValue(formValues, 200);

    const { isError, errorMessage, isLoading, posts } =
        useAppSelector(selectPosts);
    const [page, setPage] = useState(1);
    const limit = 5;

    const dispatch = useAppDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentChosenPost, setCurrentChosenPost] = useState<Post | null>(
        null,
    );
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const navigate = useNavigate();

    const handleFilterChange = <T extends keyof PostFilterParams>(
        filter: T,
        value: PostFilterParams[T],
    ) => {
        setFormValues((prevState) => ({
            ...prevState,
            [filter]: value,
        }));
    };

    const handleFetchMorePosts = () => {
        dispatch(
            fetchPostsAsync({
                limit,
                page: page + 1,
                userId: debouncedFormValues.postAuthorFilter,
                title: debouncedFormValues.postNameFilter,
            }),
        );
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        setSearchParams((prevValue) => {
            prevValue.set('userId', formValues.postAuthorFilter);
            return prevValue;
        });
    }, [formValues.postAuthorFilter, setSearchParams]);

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
        navigate(`/admin/posts/${postId}`);
    };

    return (
        <div className={classNames('userPostPage', theme)}>
            <h2 className="userPostsHeader">{text.userPosts}</h2>
            <PostsControls
                setPage={setPage}
                paginationLimit={limit}
                formValues={formValues}
                handleFilterChange={handleFilterChange}
            />
            <div className="postsContainer">
                {isLoading && !posts.length ? (
                    <Loader text={text.fetchingPosts} />
                ) : (isError && !errorMessage) || !posts.length ? (
                    <div className="error">{text.noPostsAvailable}</div>
                ) : (
                    <>
                        {posts.map((post) => (
                            <PostCard
                                key={post.id}
                                post={post}
                                onEdit={() => handlePostEdit(post)}
                                onDelete={() => handlePostDelete(post)}
                                onViewComments={() =>
                                    handlePostViewComments(post.id)
                                }
                            />
                        ))}
                        <Button
                            loading={isLoading}
                            onClick={handleFetchMorePosts}
                        >
                            {text.loadMore}
                        </Button>
                    </>
                )}
            </div>
            <PostCrudModal
                isOpen={isModalOpen}
                title={text.EDIT_MODAL.heading}
                actionButtonText={text.EDIT_MODAL.actionButtonText}
                onAction={handleEditAction}
                onCancel={handleCancel}
                predefinedPost={currentChosenPost}
            />
            <Modal
                isOpen={isDeleteModalOpen}
                onCancel={handleCancel}
                theme="danger"
                title={text.DELETE_MODAL.heading}
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
                        {text.DELETE_MODAL.warningText}
                    </div>
                </div>
            </Modal>
        </div>
    );
};
