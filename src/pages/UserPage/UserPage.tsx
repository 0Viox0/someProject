import { fetchUsersAsync } from '@redux/users/thunk';
import { Loader } from 'components/Loader';
import { Table } from 'components/Table';
import { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { UserForTable } from './types';
import { mapUsersToTableData } from './utils';
import { useDebounce } from 'shared/hooks/useDebounce';
import { Input } from 'components/Input';
import { text } from 'shared/text/text';
import { User } from '@redux/users/types';
import { UserCard } from 'components/UserCard';
import { useNavigate } from 'react-router';
import { selectFetchedUsers } from '@redux/users/selectors';
import { columns } from './constants';

import './UserPage.scss';

export const UserPage = () => {
    const dispatch = useAppDispatch();
    const { isError, isLoading, users } = useAppSelector(selectFetchedUsers);
    const [inputValue, setInputValue] = useState('');
    const debouncedInputValue = useDebounce(inputValue, 200);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoading || isError) {
            setSelectedUser(null);
        }
    }, [isError, isLoading]);

    useEffect(() => {
        dispatch(fetchUsersAsync(debouncedInputValue));
    }, [debouncedInputValue, dispatch]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleUserCardClose = () => {
        setSelectedUser(null);
    };

    const handleRowClick = (rowData: UserForTable) => {
        setSelectedUser(
            users.find((user) => user.username === rowData.username),
        );
    };

    const handleViewPostsButtonClick = () => {
        navigate(`/posts?userId=${selectedUser.id}`);
    };

    let content: ReactNode = null;

    if (isError) {
        content = <div className="error">{text.usersNotFound}</div>;
    } else if (isLoading || !users.length) {
        content = (
            <Loader
                className="userLoader"
                text={text.loadingUsers}
                animationSeed={300}
            />
        );
    } else {
        content = (
            <Table
                className="userList"
                columns={columns}
                dataSource={mapUsersToTableData(users)}
                theme="secondary"
                onRouteClick={handleRowClick}
                pageLimit={5}
            />
        );
    }

    return (
        <div className={'userPage'}>
            <h2 className="userPageHeader">{text.userListHeader}</h2>
            <Input
                value={inputValue}
                onChange={handleInputChange}
                label="Search"
                placeholder={text.enterTheUsername}
                className="userSearchInput"
            />
            <div className="tableUserCardWrapper">
                {content}
                {selectedUser && (
                    <UserCard
                        className="userCard"
                        onClose={handleUserCardClose}
                        user={selectedUser}
                        onViewPostsButtonClick={handleViewPostsButtonClick}
                    />
                )}
            </div>
        </div>
    );
};
