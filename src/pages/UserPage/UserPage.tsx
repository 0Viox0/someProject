import { UserPageHeader, UserPageWrapper } from './components';
import { UserTable } from 'modules/UserTable';

export const UserPage = () => {
    return (
        <UserPageWrapper>
            <UserPageHeader />
            <UserTable />
        </UserPageWrapper>
    );
};
