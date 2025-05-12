import { User } from '../types/types';

export interface UsersState {
    users: User[];
    isLoading: boolean;
    isError: boolean;
}
