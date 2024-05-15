import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from '@/api/api';
import { Task } from '@/pages/main/model/types/TaskSchema';

export const addTask = createAsyncThunk<Task[], Task, { rejectValue: string }>(
    'tasks/addTask',
    async (task, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const response = await $api.post<Task[]>('/tasks', task);
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (error) {
            return rejectWithValue('error');
        }
    },
);
