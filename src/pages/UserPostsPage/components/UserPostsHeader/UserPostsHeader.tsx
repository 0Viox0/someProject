import { text } from 'shared/text';

import './UserPostHeader.scss';

export const UserPostsHeader = () => {
    return <h2 className="userPostsHeader">{text.userPosts}</h2>;
};
