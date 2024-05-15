import { StateSchema } from '@/store/types/stateSchema';

export const getErrorTasks = (state: StateSchema) => state.tasks?.error;
