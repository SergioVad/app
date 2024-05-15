import { StateSchema } from '@/store/types/stateSchema';

export const getIndexTask = (state: StateSchema) => state.tasks?.indexTask;
