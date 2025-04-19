import classNames from 'classnames';
import { text } from 'shared/text/text';
import { PostView } from 'components/PostView';
import { CommentsSectionWrapper } from './CommentsSectionWrapper';

import './PostPage.scss';

export const PostPage = () => {
    return (
        <div className={classNames('userPostPage')}>
            <h2 className="userPostHeader">{text.POST_PAGE.heading}</h2>
            <PostView />
            <CommentsSectionWrapper />
        </div>
    );
};
