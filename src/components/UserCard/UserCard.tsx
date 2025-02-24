import { FC } from 'react';
import { UserCardProps } from './type';
import { UpperCardInfo } from './UpperCardInfo/UpperCardInfo';
import EmailIcon from 'shared/assets/icons/Message.svg';
import PhoneIcon from 'shared/assets/icons/Phone.svg';
import WorldIcon from 'shared/assets/icons/World.svg';
import { UserAddressCard } from './UserAddressCard';
import { UserCompanyCard } from './UserCompanyCard';
import { Button } from 'components/Button';
import { text } from 'shared/text/text';
import { useTheme } from 'features/darkTheme';
import classNames from 'classnames';

import './UserCard.scss';

export const UserCard: FC<UserCardProps> = ({ user }) => {
    const { theme } = useTheme();

    return (
        <div className={classNames('userCard', theme)}>
            <div className="userCardHeader">
                <h3 className="headerName">{user.name}</h3>
                <div className={classNames('akaSign', theme)}>@</div>
                <span className={classNames('headerUsername', theme)}>
                    {user.username}
                </span>
            </div>
            <div className="userInfoWrapper">
                <UpperCardInfo icon={<EmailIcon />} info={user.email} />
                <UpperCardInfo icon={<PhoneIcon />} info={user.phone} />
                <UpperCardInfo icon={<WorldIcon />} info={user.website} />
            </div>
            <div className="infoCardsWrapper">
                <UserAddressCard userAddress={user.address} />
                <div className="rightInfoCardsWrapper">
                    <UserCompanyCard userCompany={user.company} />
                    <Button className="viewPostsButton">
                        {text.viewPosts}
                    </Button>
                </div>
            </div>
        </div>
    );
};
