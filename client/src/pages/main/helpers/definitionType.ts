import { TaskType } from '../model/types/TaskSchema';

export const definitionType = (value: string): TaskType => {
    switch (value) {
        case 'Ошибка':
            return 'error';
        case 'Новая функциональность':
            return 'new_func';
        case 'Улучшение':
            return 'improvement';
        case 'Документация':
            return 'documentaion';
    }
    return 'error';
};
