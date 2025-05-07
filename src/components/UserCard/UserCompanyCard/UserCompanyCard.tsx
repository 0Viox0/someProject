import { FC } from 'react';
import { UserCompanyCardProps } from '../type';
import { text } from 'shared/text/text';
import ChartIcon from 'shared/assets/icons/ChartStock.svg';

import './UserCompanyCard.scss';

export const UserCompanyCard: FC<UserCompanyCardProps> = ({ userCompany }) => {
    return (
        <div className="companyCardWrapper">
            <div className="companyCardHeader">
                <h3 className="companyHeadingText">{text.companyHeading}</h3>
                <ChartIcon className="chartIcon" />
            </div>
            <span className="companyName">{userCompany.name}</span>
        </div>
    );
};
