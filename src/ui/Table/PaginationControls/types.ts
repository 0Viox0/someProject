import { Dispatch } from 'react';
import { BaseComponentProps } from 'shared/types/types';

export interface PaginationControlsProps extends Required<BaseComponentProps> {
    currentPageNumber: number;
    pageLimit: number;
    rowsCount: number;
    setCurrentPageNumber: Dispatch<React.SetStateAction<number>>;
}
