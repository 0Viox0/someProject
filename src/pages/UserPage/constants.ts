import { TableProps } from 'components/Table/types';
import { UserForTable } from './types';

export const columns: TableProps<UserForTable>['columns'] = [
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
