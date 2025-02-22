import { FC } from 'react';
import { UserCompanyCardProps } from '../type';
import { text } from 'shared/text/text';
import ChartIcon from 'shared/assets/icons/ChartStock.svg';
import { useTheme } from 'features/darkTheme';
import classNames from 'classnames';

import './UserCompanyCard.scss';

export const UserCompanyCard: FC<UserCompanyCardProps> = ({ userCompany }) => {
    const { theme } = useTheme();

    return (
        <div className={classNames('companyCardWrapper', theme)}>
            <div className="companyCardHeader">
                <h3 className="companyHeadingText">{text.companyHeading}</h3>
                <ChartIcon className="chartIcon" />
            </div>
            <span className="companyName">{userCompany.name}</span>
        </div>
    );
};
