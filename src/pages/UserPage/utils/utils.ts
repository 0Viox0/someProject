import { User } from 'modules/user';
import { UserForTable } from '../types/types';

export const mapUsersToTableData = (users: User[]): UserForTable[] => {
    return users.map((user) => ({
        username: user.username,
        name: user.name,
        email: user.email,
        company: user.company.name,
    }));
};
