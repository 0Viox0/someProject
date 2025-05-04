import TriangleArrow from 'shared/assets/icons/TriangleArrow.svg';
import { FC } from 'react';
import { PaginationControlsProps } from './types';
import classNames from 'classnames';

import './PaginationControls.scss';

export const PaginationControls: FC<PaginationControlsProps> = ({
    size,
    currentPageNumber,
    theme,
    pageLimit,
    rowsCount,
    setCurrentPageNumber,
}) => {
    const totalPages = Math.round(rowsCount / pageLimit);

    const numArray = Array.from(
        { length: totalPages },
        (_, index) => index + 1,
    );

    const handleCardClick = (clickedPageNumber: number) => {
        setCurrentPageNumber(clickedPageNumber);
    };

    const handleClickArrowLeft = () => {
        if (currentPageNumber - 1 < 1) {
            return;
        }

        setCurrentPageNumber((prevPageNumber) => prevPageNumber - 1);
    };

    const handleClickArrowRight = () => {
        if (currentPageNumber + 1 > totalPages) {
            return;
        }

        setCurrentPageNumber((prevPageNumber) => prevPageNumber + 1);
    };

    return (
        <div className="paginationControls">
            {currentPageNumber !== 1 && (
                <TriangleArrow
                    className={classNames('arrow left', size)}
                    onClick={handleClickArrowLeft}
                />
            )}
            <div className="pageCardsWrapper">
                {numArray.map((pageNumber, index) => (
                    <div
                        key={index}
                        className={classNames(
                            'pageCard',
                            `pageCard-${theme}`,
                            size,
                            {
                                [`active-${theme}`]:
                                    pageNumber === currentPageNumber,
                            },
                        )}
                        onClick={() => handleCardClick(pageNumber)}
                    >
                        {pageNumber}
                    </div>
                ))}
            </div>
            {currentPageNumber !== totalPages && (
                <TriangleArrow
                    className={classNames('arrow right', size)}
                    onClick={handleClickArrowRight}
                />
            )}
        </div>
    );
};
