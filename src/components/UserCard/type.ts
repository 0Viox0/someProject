import { User } from '@redux/users/types';
import { MouseEvent } from 'react';

export interface UserCardProps {
    user: User;
    className?: string;
    onClose: () => void;
    onViewPostsButtonClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export interface UserAddressCardProps {
    userAddress: User['address'];
}

export interface UserCompanyCardProps {
    userCompany: User['company'];
}
