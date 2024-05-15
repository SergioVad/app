import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Task, TaskSchema } from '../types/TaskSchema';
import { fetchTasks } from '../services/fetchTasks';
import { addTask } from '@/widget/model/services/addTask';

const initialState: TaskSchema = {
    tasks: [],
    isLoading: false,
    error: undefined,
    indexTask: undefined,
};

export const TaskSlice = createSlice({
    name: 'ArticleDetails',
    reducers: {
        toggleModal(state, action: PayloadAction<number>) {
            state.indexTask = action.payload;
        },
    },
    initialState,
    extraReducers(builder) {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                fetchTasks.fulfilled,
                (state, action: PayloadAction<Task[]>) => {
                    state.isLoading = false;
                    state.tasks = action.payload;
                },
            )
            .addCase(fetchTasks.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(addTask.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(
                addTask.fulfilled,
                (state, action: PayloadAction<Task[]>) => {
                    state.isLoading = false;
                    state.tasks = action.payload;
                },
            )
            .addCase(addTask.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { actions: TaskSliceActions } = TaskSlice;
export const { reducer: TaskSliceReducer } = TaskSlice;
