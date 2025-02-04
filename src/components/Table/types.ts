import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

// it was pretty fun doing all these types ;D

// T is the type of the row
//
// for example <T> might be
//
// interface User {
//     name: string;
//     age: number;
//     sex: 'male' | 'female';
// }

export type Column<T> = {
    title: string;
    key: keyof T;
    render?: (row: T) => ReactNode;
};

export type DataSource<T> = T[];

export interface TableProps<T> extends BaseComponentProps {
    columns: Column<T>[];
    dataSource: DataSource<T>;
    className?: string;
}

// for ease of use
export type TableColumns<T> = TableProps<T>['columns'];
