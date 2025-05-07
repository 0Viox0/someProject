import { PostsList } from 'modules/posts';
import { UserPostsHeader, UserPostsWrapper } from './components';

export const UserPostsPage = () => {
    return (
        <UserPostsWrapper>
            <UserPostsHeader />
            <PostsList />
        </UserPostsWrapper>
    );
};
