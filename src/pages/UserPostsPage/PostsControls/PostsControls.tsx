import { Input } from 'components/Input';
import { Select } from 'components/Select';
import { NewPostButtonWrapper } from 'features/posts/components';
import { Dispatch, FC, useEffect, useState } from 'react';
import { text } from 'shared/text/text';
import { PostFilterHandleFunction, PostFilterParams } from '../types';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { selectFetchedUsers } from '@redux/users/selectors';
import { SelectProps } from 'components/Select/types';
import { resetPosts } from '@redux/userPosts/slice';
import { fetchPostsAsync } from '@redux/userPosts/thunk';
import { fetchUsersAsync } from '@redux/users/thunk';
import { useDebouncedValue } from 'shared/hooks/useDebouncedValue';

export type PostControls = {
    formValues: PostFilterParams;
    handleFilterChange: PostFilterHandleFunction;
    setPage: Dispatch<React.SetStateAction<number>>;
    paginationLimit: number;
};

export const PostsControls: FC<PostControls> = ({
    formValues,
    handleFilterChange,
    setPage,
    paginationLimit,
}) => {
    const { isLoading, users } = useAppSelector(selectFetchedUsers);
    const [userOptions, setUserOptions] = useState<SelectProps['options']>([]);
    const dispatch = useAppDispatch();
    const debouncedFormValues = useDebouncedValue(formValues, 200);

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
        dispatch(
            fetchPostsAsync({
                page: 0,
                limit: paginationLimit,
                userId: debouncedFormValues.postAuthorFilter,
                title: debouncedFormValues.postNameFilter,
            }),
        );

        dispatch(fetchUsersAsync(''));
    }, [
        debouncedFormValues.postAuthorFilter,
        debouncedFormValues.postNameFilter,
        dispatch,
        paginationLimit,
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
