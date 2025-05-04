import { PostsList } from 'modules/posts';
import { UserPostsHeader } from './components';
import { UserPostsWrapper } from './components/UserPostsWrapper';

export const UserPostsPage = () => {
    return (
        <UserPostsWrapper>
            <UserPostsHeader />
            <PostsList />
        </UserPostsWrapper>
    );
};
