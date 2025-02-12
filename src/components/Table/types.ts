import { ReactNode } from 'react';
import { BaseComponentProps } from 'shared/types/types';

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
    /** Columns of the table */
    columns: Column<T>[];
    /** Table data that will be displayed */
    dataSource: DataSource<T>;
    /** Some additional styles */
    className?: string;
    /** Optional page limit for pagination */
    pageLimit?: number;
}
