import { PostView } from 'modules/PostView';
import { CommentsSectionWrapper } from 'modules/CommentsSectionWrapper';
import { PostPageHeader, PostPageWrapper } from './components';

export const PostPage = () => {
    return (
        <PostPageWrapper>
            <PostPageHeader />
            <PostView />
            <CommentsSectionWrapper />
        </PostPageWrapper>
    );
};
