import { RootState } from '@redux/store';

export const selectPost = (state: RootState) => state.comments;
