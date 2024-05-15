import { TaskStatus } from '../model/types/TaskSchema';

export const definitionStatus = (value: string): TaskStatus => {
    switch (value) {
        case 'В очереди':
            return 'queue';
        case 'В работе':
            return 'in_work';
        case 'Выполнено':
            return 'done';
    }
    return 'queue';
};
