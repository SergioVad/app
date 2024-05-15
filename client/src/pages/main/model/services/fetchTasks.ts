import { createAsyncThunk } from '@reduxjs/toolkit';
import type { Task } from '../types/TaskSchema';
import { $api } from '@/api/api';

interface fetchTasksProps {
    item?: string;
    orderAsc?: boolean;
}

export const fetchTasks = createAsyncThunk<
    Task[],
    fetchTasksProps | undefined,
    { rejectValue: string }
>('tasks/fetchTasks', async (queryParam, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    let order;
    if (queryParam) {
        order = queryParam.orderAsc ? 'asc' : 'desc';
    }
    try {
        const response = await $api.get<Task[]>('/tasks', {
            params: {
                sort: queryParam?.item ? queryParam?.item : undefined,
                order: order ? order : undefined,
            },
        });
        if (!response.data) {
            throw new Error();
        }
        return response.data;
    } catch (error) {
        return rejectWithValue('error');
    }
});
