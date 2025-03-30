import classNames from 'classnames';
import { useTheme } from 'features/darkTheme';
import { text } from 'shared/text/text';
import { PostView } from 'components/PostView';
import { CommentsSectionWrapper } from './CommentsSectionWrapper';

import './PostPage.scss';

export const PostPage = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('userPostPage', theme)}>
            <h2 className="userPostHeader">{text.POST_PAGE.heading}</h2>
            <PostView />
            <CommentsSectionWrapper />
        </div>
    );
};
