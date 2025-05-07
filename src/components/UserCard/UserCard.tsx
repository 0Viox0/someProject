import { FC } from 'react';
import { UserCardProps } from './type';
import { UpperCardInfo } from './UpperCardInfo';
import { UserAddressCard } from './UserAddressCard';
import { UserCompanyCard } from './UserCompanyCard';
import { text } from 'shared/text/text';
import classNames from 'classnames';
import CloseIcon from 'shared/assets/icons/CloseIcon.svg';
import { Button } from 'ui';

import EmailIcon from 'shared/assets/icons/Message.svg';
import PhoneIcon from 'shared/assets/icons/Phone.svg';
import WorldIcon from 'shared/assets/icons/World.svg';

import './UserCard.scss';

export const UserCard: FC<UserCardProps> = ({
    user,
    className,
    onClose,
    onViewPostsButtonClick,
}) => {
    return (
        <div className={classNames('userCard', className)}>
            <div className="userCardHeader">
                <div className="userCardHeaderNameWrapper">
                    <h3 className="headerName">{user.name}</h3>
                    <button className="userCardCloseButton" onClick={onClose}>
                        <CloseIcon className="icon" />
                    </button>
                </div>
                <div className="headerUsernameWrapper">
                    <span className="headerUsername">@ {user.username}</span>
                </div>
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
                    <Button
                        className="viewPostsButton"
                        onClick={onViewPostsButtonClick}
                    >
                        {text.viewPosts}
                    </Button>
                </div>
            </div>
        </div>
    );
};
