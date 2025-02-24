import { User } from '@redux/users/types';
import { UserForTable } from './types';

export const mapUsersToTableData = (users: User[]): UserForTable[] => {
    return users.map(
        (user) =>
            ({
                username: user.username,
                name: user.name,
                email: user.email,
                company: user.company.name,
            }) satisfies UserForTable,
    );
};
