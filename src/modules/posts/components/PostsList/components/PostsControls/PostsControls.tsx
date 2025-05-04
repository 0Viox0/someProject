import { Dispatch, FC, useEffect, useState } from 'react';
import { text } from 'shared/text/text';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { useDebounce } from 'shared/hooks/useDebounce';
import { SelectProps } from 'ui/Select/types';
import { Input, Select } from 'ui';
import { NewPostButtonWrapper } from 'modules/posts/components';
import { PostFilterHandleFunction, PostFilterParams } from '../../types/types';
import { selectFetchedUsers } from 'modules/user/store/selectors';
import { fetchUsersAsync } from 'modules/user/store/thunk';
import { resetPosts } from 'modules/posts/store/userPosts/slice';
import { fetchPostsAsync } from 'modules/posts/store/userPosts/thunk';

export type PostsControls = {
    formValues: PostFilterParams;
    handleFilterChange: PostFilterHandleFunction;
    setPage: Dispatch<React.SetStateAction<number>>;
    setNoMorePosts: Dispatch<React.SetStateAction<boolean>>;
    paginationLimit: number;
};

export const PostsControls: FC<PostsControls> = ({
    formValues,
    handleFilterChange,
    setPage,
    setNoMorePosts,
    paginationLimit,
}) => {
    const { isLoading, users } = useAppSelector(selectFetchedUsers);
    const [userOptions, setUserOptions] = useState<SelectProps['options']>([]);
    const dispatch = useAppDispatch();
    const debouncedFormValues = useDebounce(formValues, 200);

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
        dispatch(resetPosts());
        setPage(0);
        setNoMorePosts(false);

        dispatch(
            fetchPostsAsync({
                page: 0,
                limit: paginationLimit,
                userId: debouncedFormValues.postAuthorFilter,
                title: debouncedFormValues.postNameFilter,
            }),
        );

        setPage((prevPage) => prevPage + 1);

        dispatch(fetchUsersAsync(''));
    }, [
        debouncedFormValues.postAuthorFilter,
        debouncedFormValues.postNameFilter,
        dispatch,
        paginationLimit,
        setNoMorePosts,
        setPage,
    ]);

    return (
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
                    disabled={isLoading}
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
    );
};
