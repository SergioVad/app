import { StateSchema } from '@/store/types/stateSchema';
import { getErrorTasks } from './getErrorTasks';

describe('getErrorTasks.test', () => {
    test('State Error', () => {
        const state: DeepPartial<StateSchema> = {
            tasks: {
                error: 'Error',
            },
        };
        expect(getErrorTasks(state as StateSchema)).toEqual('Error');
    });
    test('State undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getErrorTasks(state as StateSchema)).toEqual(undefined);
    });
});
