import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from 'shared/utils/axiosInstance';
import { Post } from './types';

export const postsThunk = createAsyncThunk('fetchPosts', async () => {
    const response = await axiosInstance.get<Post[]>(
        `/posts?_page=${page}&_limit=${pageSize}`,
    );

    return response.data;
});
