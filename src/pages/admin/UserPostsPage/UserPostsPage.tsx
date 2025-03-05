import { text } from 'shared/text/text';
import { useTheme } from 'features/darkTheme';
import classNames from 'classnames';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { useEffect, useState } from 'react';
import { PostFilterParams } from './types';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectPosts } from '@redux/userPosts/selectors';
import { fetchPostsAsync } from '@redux/userPosts/thunk';
import { Loader } from 'components/Loader';
import { PostCard } from 'components/PostCard';
import { useDebouncedValue } from 'shared/hooks/useDebouncedValue';
import { useSearchParams } from 'react-router';
import { resetPosts } from '@redux/userPosts/slice';
import { Select } from 'components/Select';
import { fetchUsersAsync } from '@redux/users/thunk';
import { selectFetchedUsers } from '@redux/users/selectors';
import { SelectProps } from 'components/Select/types';
import { NewPostButtonWrapper } from './NewPostButtonWrapper';

import './UserPostsPage.scss';

export const UserPostsPage = () => {
    const { theme } = useTheme();
    const [searchParams] = useSearchParams();
    const [formValues, setFormValues] = useState<PostFilterParams>({
        postNameFilter: '',
        postAuthorFilter: searchParams.get('userId'),
    });
    const { isError, errorMessage, isLoading, posts } =
        useAppSelector(selectPosts);
    const { isLoading: areUsersLoading, users } =
        useAppSelector(selectFetchedUsers);
    const dispatch = useAppDispatch();
    const [page, setPage] = useState(1);
    const limit = 5;
    const debouncedFormValues = useDebouncedValue(formValues, 200);
    const [userOptions, setUserOptions] = useState<SelectProps['options']>([]);

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
        dispatch(resetPosts());
        setPage(0);
        dispatch(
            fetchPostsAsync({
                page: 0,
                limit,
                userId: debouncedFormValues.postAuthorFilter,
                title: debouncedFormValues.postNameFilter,
            }),
        );
        dispatch(fetchUsersAsync(''));
    }, [
        debouncedFormValues.postAuthorFilter,
        debouncedFormValues.postNameFilter,
        dispatch,
    ]);

    useEffect(() => {
        if (users) {
            setUserOptions(
                users.map((user) => ({
                    label: user.username,
                    value: user.id,
                })),
            );
        }
    }, [users]);

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('userId', formValues.postAuthorFilter);

        history.replaceState(
            null,
            '',
            `${location.pathname}?${searchParams.toString()}`,
        );
    }, [formValues.postAuthorFilter]);

    return (
        <div className={classNames('userPostPage', theme)}>
            <h2 className="userPostsHeader">{text.userPosts}</h2>
            <div className="postControlsWrapper">
                <div className="filtersWrapper">
                    <h3 className="filterHeader">{text.filter}</h3>
                    <Input
                        label={text.postName}
                        value={formValues.postNameFilter}
                        placeholder={text.enterPostName}
                        onChange={(e) =>
                            handleFilterChange('postNameFilter', e.target.value)
                        }
                    />
                    <Select
                        className="select"
                        selectedValue={+formValues.postAuthorFilter}
                        options={userOptions}
                        disabled={areUsersLoading}
                        onChange={(newValue) =>
                            handleFilterChange(
                                'postAuthorFilter',
                                newValue as string,
                            )
                        }
                    />
                </div>
                <NewPostButtonWrapper />
            </div>
            <div className="postsContainer">
                {isLoading && !posts.length ? (
                    <Loader text={text.fetchingPosts} />
                ) : (isError && !errorMessage) || !posts.length ? (
                    <div className="error">{text.noPostsAvailable}</div>
                ) : (
                    <>
                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} />
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
        </div>
    );
};
