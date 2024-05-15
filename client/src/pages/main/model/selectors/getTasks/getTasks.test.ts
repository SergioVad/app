import { StateSchema } from '@/store/types/stateSchema';
import { getTasks } from './getTasks';

describe('getTasks.test', () => {
    test('State Error', () => {
        const state: DeepPartial<StateSchema> = {
            tasks: {
                tasks: [
                    {
                        type: 'Улучшение',
                        description: 'Описание',
                        name: 'ФИО',
                        date: '01.01.2000',
                        status: 'Выполнено',
                    },
                ],
            },
        };
        expect(getTasks(state as StateSchema)).toEqual([
            {
                type: 'Улучшение',
                description: 'Описание',
                name: 'ФИО',
                date: '01.01.2000',
                status: 'Выполнено',
            },
        ]);
    });
    test('State undefined', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getTasks(state as StateSchema)).toEqual(undefined);
    });
});
