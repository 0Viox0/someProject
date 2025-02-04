import { ReactNode, useState } from 'react';
import { TableProps } from './types';
import classNames from 'classnames';

import './Table.scss';

export const Table = <T,>({
    columns,
    dataSource,
    size = 'medium',
    theme = 'primary',
    className,
}: TableProps<T>) => {
    const [hoveredRowIndex, setHoveredRowIndex] = useState(-1);

    const toggleHover = (index: number) => {
        setHoveredRowIndex(index);
    };

    return (
        <table className={classNames('table', `table-${size}`, className)}>
            <thead>
                <tr>
                    {columns.map((column) => (
                        <th
                            key={String(column.key)}
                            className={classNames(`table-head-${theme}`, size)}
                        >
                            {column.title}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {dataSource.map((row, rowIndex) => (
                    <tr
                        key={rowIndex}
                        className={classNames(`border-top-${theme}`, {
                            [`hover-${theme}`]: hoveredRowIndex === rowIndex,
                        })}
                        onMouseEnter={() => toggleHover(rowIndex)}
                        onMouseLeave={() => toggleHover(-1)}
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
    );
};
