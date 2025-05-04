import { UserTable } from 'modules/user';
import { UserPageHeader, UserPageWrapper } from './components';

export const UserPage = () => {
    return (
        <UserPageWrapper>
            <UserPageHeader />
            <UserTable />
        </UserPageWrapper>
    );
};
