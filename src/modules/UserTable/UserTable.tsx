import { selectFetchedUsers } from '@redux/users/selectors';
import { fetchUsersAsync } from '@redux/users/thunk';
import { User } from '@redux/users/types';
import { UserCard } from 'components/UserCard';
import { columns } from 'pages/UserPage/constants/constants';
import { UserForTable } from 'pages/UserPage/types/types';
import { mapUsersToTableData } from 'pages/UserPage/utils/utils';
import { useState, useEffect, ChangeEvent } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector, useDebounce } from 'shared/hooks';
import { text } from 'shared/text';
import { Input, Loader, Table } from 'ui';

import './UserTable.scss';

export const UserTable = () => {
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

    const renderContent = () => {
        if (isError) {
            return <div className="error">{text.usersNotFound}</div>;
        } else if (isLoading || !users.length) {
            return (
                <Loader
                    className="userLoader"
                    text={text.loadingUsers}
                    animationSeed={300}
                />
            );
        } else {
            return (
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
    };
    return (
        <>
            <Input
                value={inputValue}
                onChange={handleInputChange}
                label="Search"
                placeholder={text.enterTheUsername}
                className="userSearchInput"
            />
            <div className="tableUserCardWrapper">
                {renderContent()}
                {selectedUser && (
                    <UserCard
                        className="userCard"
                        onClose={handleUserCardClose}
                        user={selectedUser}
                        onViewPostsButtonClick={handleViewPostsButtonClick}
                    />
                )}
            </div>
        </>
    );
};
