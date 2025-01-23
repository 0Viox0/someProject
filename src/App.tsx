import { Table } from 'components/Table';
import { DataSource, TableColumns } from 'components/Table/types';

import './index.scss';

interface User {
    name: string;
    age: number;
    sex: 'male' | 'female';
}

const columns: TableColumns<User> = [
    {
        title: 'Name',
        key: 'name',
    },
    {
        title: 'Age',
        key: 'age',
    },
    {
        title: 'Sex',
        key: 'sex',
    },
];

const dataSource: DataSource<User> = [
    {
        name: 'Jack',
        age: 20,
        sex: 'male',
    },
    {
        name: 'Max',
        age: 20,
        sex: 'male',
    },
    {
        name: 'Sam',
        age: 19,
        sex: 'male',
    },
];

export const App = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Table
                columns={columns}
                dataSource={dataSource}
                type="secondary"
                size="medium"
            />
        </div>
    );
};
