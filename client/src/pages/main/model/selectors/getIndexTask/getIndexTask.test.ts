import { StateSchema } from '@/store/types/stateSchema';
import { getIndexTask } from './getIndexTask';

describe('getIndexTask.test', () => {
    test('State Error', () => {
        const state: DeepPartial<StateSchema> = {
            tasks: {
                indexTask: 10,
            },
        };
        expect(getIndexTask(state as StateSchema)).toEqual(10);
    });
    test('State undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getIndexTask(state as StateSchema)).toEqual(undefined);
    });
});
