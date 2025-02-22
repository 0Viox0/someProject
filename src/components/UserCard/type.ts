import { User } from '@redux/users/types';

export interface UserCardProps {
    user: User;
}

export interface UserAddressCardProps {
    userAddress: User['address'];
}

export interface UserCompanyCardProps {
    userCompany: User['company'];
}
