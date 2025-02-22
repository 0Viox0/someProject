import { createSlice } from '@reduxjs/toolkit';
import { UsersState } from './types';
import { fetchUsersAsync } from './thunk';

const initialState: UsersState = {
    users: [],
    isLoading: false,
    isError: false,
};

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUsersAsync.pending, (state) => {
            state.isLoading = true;
            state.isError = false;
        });
        builder.addCase(fetchUsersAsync.rejected, (state) => {
            state.isError = true;
        });
        builder.addCase(fetchUsersAsync.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload;
            state.isError = false;
        });
    },
});

export default userSlice.reducer;
