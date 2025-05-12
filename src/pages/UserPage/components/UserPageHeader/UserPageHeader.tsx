import { text } from 'shared/text';

import './UserPageHeader.scss';

export const UserPageHeader = () => {
    return <h2 className="userPageHeader">{text.userListHeader}</h2>;
};
