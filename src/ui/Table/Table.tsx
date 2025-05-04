import { ReactNode, useState } from 'react';
import { TableProps } from './types';
import classNames from 'classnames';
import { PaginationControls } from './PaginationControls';

import './Table.scss';

export const Table = <T,>({
    columns,
    dataSource,
    size = 'medium',
    theme = 'primary',
    pageLimit,
    className,
    onRouteClick,
}: TableProps<T>) => {
    const [currentPageNumber, setCurrentPageNumber] = useState(1);

    return (
        <div className="tableWrapper">
            <table className={classNames('table', `table-${size}`, className)}>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={String(column.key)}
                                className={classNames(
                                    `table-head-${theme}`,
                                    size,
                                )}
                            >
                                {column.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {dataSource
                        .slice(
                            (currentPageNumber - 1) * pageLimit,
                            pageLimit
                                ? (currentPageNumber - 1) * pageLimit +
                                      pageLimit
                                : dataSource.length,
                        )
                        .map((row, rowIndex) => (
                            <tr
                                key={rowIndex}
                                className={classNames(
                                    `border-top-${theme}`,
                                    `hover-${theme}`,
                                )}
                                onClick={() => onRouteClick?.(row)}
                            >
                                {columns.map((col, index) => (
                                    <td
                                        className={classNames(
                                            size,
                                            `border-left-${theme}`,
                                        )}
                                        key={index}
                                    >
                                        {col.render
                                            ? col.render(row)
                                            : (row[col.key] as ReactNode)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                </tbody>
            </table>
            {pageLimit && dataSource.length > pageLimit && (
                <PaginationControls
                    setCurrentPageNumber={setCurrentPageNumber}
                    size={size}
                    theme={theme}
                    currentPageNumber={currentPageNumber}
                    pageLimit={pageLimit}
                    rowsCount={dataSource.length}
                />
            )}
        </div>
    );
};
