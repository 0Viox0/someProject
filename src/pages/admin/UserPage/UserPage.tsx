<<<<<<< HEAD
import classNames from 'classnames';
import { Table } from 'components/Table';
import { TableProps } from 'components/Table/types';
import { useTheme } from 'features/darkTheme/hooks/useTheme';

import './UserPage.scss';
import { Input } from 'components/Input';
import { text } from 'shared/text/text';

interface UserForTable {
    username: string;
    name: string;
    email: string;
    city: string;
    company: string;
}

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
            key: 'city',
            title: 'City',
        },
        {
            key: 'company',
            title: 'Company',
        },
    ];

    const dataSource: TableProps<UserForTable>['dataSource'] = [
        {
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            city: 'Gwenborough',
            company: 'Romaguera-Crona',
        },
        {
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
            city: 'Wisokyburgh',
            company: 'Deckow-Crist',
        },
        {
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            city: 'McKenziehaven',
            company: 'Romaguera-Jacobson',
        },
        {
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            city: 'McKenziehaven',
            company: 'Romaguera-Jacobson',
        },
        {
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
            city: 'McKenziehaven',
            company: 'Romaguera-Jacobson',
        },
    ];

    const { theme } = useTheme();

    const handleRowClick = (rowData: UserForTable) => {};

    return (
        <div className={classNames('userPage', theme)}>
            <h2 className="userPageHeader">{text.userListHeader}</h2>
            <Input
                label="Search"
                placeholder={text.enterTheUsername}
                className="userSearchInput"
            />
            <Table
                className="userList"
                columns={columns}
                dataSource={dataSource}
                theme="secondary"
                onRouteClick={handleRowClick}
                pageLimit={5}
            />
        </div>
    );
=======
export const UserPage = () => {
    return <div>UserPage</div>;
>>>>>>> 6ebe1ad (feat: do basic layout and create files)
};
