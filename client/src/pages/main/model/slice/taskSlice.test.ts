import { fetchTasks } from '../services/fetchTasks';
import { Task, TaskSchema } from '../types/TaskSchema';
import { TaskSliceActions, TaskSliceReducer } from './taskSlice';

const initialState: DeepPartial<Task> = {
    type: 'Улучшение',
    description: 'Описание',
    name: 'ФИО',
    date: '01.01.2000',
    status: 'Выполнено',
};

describe('TaskSlice.test', () => {
    test('with update data', () => {
        const stateObj: DeepPartial<TaskSchema> = { tasks: [initialState] };
        expect(
            TaskSliceReducer(
                stateObj as TaskSchema,
                TaskSliceActions.toggleModal(10),
            ),
        ).toEqual({ ...stateObj, indexTask: 10 });
    });
    test('with pending', () => {
        const state: DeepPartial<TaskSchema> = {
            isLoading: false,
            error: 'error',
        };
        expect(
            //@ts-ignore
            TaskSliceReducer(state as TaskSchema, fetchTasks.pending),
        ).toEqual({
            isLoading: true,
            error: undefined,
        });
    });
});
