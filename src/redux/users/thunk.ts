import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'shared/utils/axiosInstance';
import { User } from './types';

export const fetchUsersAsync = createAsyncThunk(
    'fetchUsers',
    async (username: string) => {
        try {
            const response = await axiosInstance.get<User[]>('/users');

            const filteredData = response.data.filter((user) =>
                user.username
                    .toLocaleLowerCase()
                    .includes(username.toLocaleLowerCase() ?? ''),
            );

            if (!filteredData.length) {
                throw new Error('users were not found');
            }

            return filteredData;
        } catch {
            throw new Error('users could not be fetched');
        }
    },
);
