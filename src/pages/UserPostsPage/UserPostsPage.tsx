import { UserPostsHeader } from './components';
import { PostsList } from 'modules/PostsList';
import { UserPostsWrapper } from './components/UserPostsWrapper/UserPostsWrapper';

export const UserPostsPage = () => {
    return (
        <UserPostsWrapper>
            <UserPostsHeader />
            <PostsList />
        </UserPostsWrapper>
    );
};
