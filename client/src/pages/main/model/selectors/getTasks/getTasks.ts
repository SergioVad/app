import { StateSchema } from '@/store/types/stateSchema';

export const getTasks = (state: StateSchema) => state.tasks?.tasks;
