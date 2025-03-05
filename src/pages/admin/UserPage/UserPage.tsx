import classNames from 'classnames';
import { fetchUsersAsync } from '@redux/users/thunk';
import { Loader } from 'components/Loader';
import { Table } from 'components/Table';
import { TableProps } from 'components/Table/types';
import { useTheme } from 'features/darkTheme/hooks/useTheme';
import { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'shared/hooks';
import { UserForTable } from './types';
import { mapUsersToTableData } from './utils';
import { useDebouncedValue } from 'shared/hooks/useDebouncedValue';
import { Input } from 'components/Input';
import { text } from 'shared/text/text';
import { User } from '@redux/users/types';
import { UserCard } from 'components/UserCard';
import { useNavigate } from 'react-router';
import { selectFetchedUsers } from '@redux/users/selectors';

import './UserPage.scss';
import { selectFetchedUsers } from '@redux/users/selectors';

export const UserPage = () => {
    const columns: TableProps<UserForTable>['columns'] = [
        {
            key: 'username',
            title: 'Username',
        },
        {
            key: 'name',
            title: 'Name',
        },
        {
            key: 'email',
            title: 'Email',
        },
        {
            key: 'company',
            title: 'Company',
        },
    ];

    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const { isError, isLoading, users } = useAppSelector(selectFetchedUsers);
    const [inputValue, setInputValue] = useState('');
    const debouncedInputValue = useDebouncedValue(inputValue, 200);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    useEffect(() => {
        dispatch(fetchUsersAsync(debouncedInputValue));
    }, [debouncedInputValue, dispatch]);

    const handleRowClick = (rowData: UserForTable) => {
        console.log(rowData);
        setSelectedUser(
            users.find((user) => user.username === rowData.username),
        );
    };

    const handleViewPostsButtonClick = () => {
        navigate(`/admin/posts?userId=${selectedUser.id}`);
    };

    return (
        <div className={classNames('userPage', theme)}>
            <h2 className="userPageHeader">{text.userListHeader}</h2>
            <Input
                value={inputValue}
                onChange={handleInputChange}
                label="Search"
                placeholder={text.enterTheUsername}
                className="userSearchInput"
            />
            <div className="tableUserCardWrapper">
                {isError ? (
                    <div className="error">{text.usersNotFound}</div>
                ) : isLoading || !users.length ? (
                    <Loader
                        className="userLoader"
                        text={text.loadingUsers}
                        animationSeed={300}
                    />
                ) : (
                    <Table
                        className="userList"
                        columns={columns}
                        dataSource={mapUsersToTableData(users)}
                        theme="secondary"
                        onRouteClick={handleRowClick}
                        pageLimit={5}
                    />
                )}
                {selectedUser && (
                    <UserCard
                        className="userCard"
                        user={selectedUser}
                        onViewPostsButtonClick={handleViewPostsButtonClick}
                    />
                )}
            </div>
        </div>
    );
};
