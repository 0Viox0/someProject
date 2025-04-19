import { FC } from 'react';
import { UserAddressCardProps } from '../type';
import { text } from 'shared/text/text';
import HomeIcon from 'shared/assets/icons/Home.svg';
import classNames from 'classnames';

import './UserAddressCard.scss';

export const UserAddressCard: FC<UserAddressCardProps> = ({ userAddress }) => {
    return (
        <div className={classNames('addressCard')}>
            <div className="addressCardHeader">
                <div className="basicAddressWrapper">
                    <h3 className="cityName">{userAddress.city}</h3>
                    <HomeIcon className="homeIcon" />
                </div>
                <div className="streetWrapper">
                    <span className="streetName">{userAddress.street}</span>
                    <span className="streetText">{text.streetShort}</span>
                </div>
                <div className="suiteWrapper">{userAddress.suite}</div>
            </div>
            <div className="zipWrapper">
                <span>{text.zip}</span>
                <span className="zipCode">{userAddress.zipcode}</span>
            </div>
        </div>
    );
};
