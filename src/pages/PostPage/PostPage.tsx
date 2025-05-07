import { PostView } from 'modules/posts';
import { PostPageHeader, PostPageWrapper } from './components';
import { CommentsSectionWrapper } from 'modules/comment';

export const PostPage = () => {
    return (
        <PostPageWrapper>
            <PostPageHeader />
            <PostView />
            <CommentsSectionWrapper />
        </PostPageWrapper>
    );
};
