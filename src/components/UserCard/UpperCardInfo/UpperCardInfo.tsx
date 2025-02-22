import { FC, useState } from 'react';
import { UpperCardInfoProps } from './types';
import CopyIcon from 'shared/assets/icons/Copy.svg';
import CheckIcon from 'shared/assets/icons/CheckIcon.svg';

import './UpperCardInfo.scss';

export const UpperCardInfo: FC<UpperCardInfoProps> = ({ icon, info }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyClick = async () => {
        if (navigator) {
            await navigator.clipboard.writeText(info);
            setIsCopied(true);

            setTimeout(() => setIsCopied(false), 1000);
        }
    };

    return (
        <div className="userInfo">
            <div className="iconInfoWrapper">
                <span className="iconWrapper">{icon}</span>
                <span className="infoContent">{info}</span>
            </div>
            {!isCopied ? (
                <CopyIcon onClick={handleCopyClick} className="copyIcon" />
            ) : (
                <CheckIcon className="checkIcon" />
            )}
        </div>
    );
};
