import { text } from 'shared/text/text';
import { useTheme } from 'features/darkTheme';
import classNames from 'classnames';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { FormEvent, useEffect, useState } from 'react';
import { PostFilterParams } from './types';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectPosts } from '@redux/userPosts/selectors';
import { fetchPostsAsync } from '@redux/userPosts/thunk';
import { Loader } from 'components/Loader';
import { PostCard } from 'components/PostCard';

import './UserPostsPage.scss';

export const UserPostsPage = () => {
    const { theme } = useTheme();
    const [formValues, setFormValues] = useState<PostFilterParams>({
        postNameFilter: '',
        postAuthorFilter: '',
    });
    const { isError, isLoading, posts } = useAppSelector(selectPosts);
    const dispatch = useAppDispatch();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };

    const handleFilterChange = <T extends keyof PostFilterParams>(
        filter: T,
        value: PostFilterParams[T],
    ) => {
        setFormValues((prevState) => ({
            ...prevState,
            [filter]: value,
        }));
    };

    useEffect(() => {
        dispatch(fetchPostsAsync({ page: 0, limit: 10 }));
    }, [dispatch]);

    return (
        <div className={classNames('userPostPage', theme)}>
            <h2 className="userPostsHeader">{text.userPosts}</h2>
            <form className="filtersWrapper" onSubmit={handleSubmit}>
                <h3 className="filterHeader">{text.filter}</h3>
                <Input
                    label={text.postName}
                    value={formValues.postNameFilter}
                    placeholder={text.enterPostName}
                    onChange={(e) =>
                        handleFilterChange('postNameFilter', e.target.value)
                    }
                />
                <Input
                    label={text.postAuthor}
                    value={formValues.postAuthorFilter}
                    placeholder={text.enterPostAuthor}
                    onChange={(e) =>
                        handleFilterChange('postAuthorFilter', e.target.value)
                    }
                />
                <Button type="submit">{text.applyFilters}</Button>
            </form>
            <div className="postsContainer">
                {isLoading || !posts.length ? (
                    <Loader text={text.fetchingPosts} />
                ) : isError ? (
                    <div className="error">{text.noPostsAvailable}</div>
                ) : (
                    <>
                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                        <Button>{text.loadMore}</Button>
                    </>
                )}
            </div>
        </div>
    );
};
