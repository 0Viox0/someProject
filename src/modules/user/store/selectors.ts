import { RootState } from '@redux/store';

export const selectFetchedUsers = (state: RootState) => state.users;
