import { text } from 'shared/text/text';
import { useTheme } from 'features/darkTheme';
import classNames from 'classnames';

import './UserPostsPage.scss';

export const UserPostsPage = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('userPostPage', theme)}>
            <h2 className="userPostsHeader">{text.userPosts}</h2>
            <div></div>
        </div>
    );
};
