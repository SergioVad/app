export type TaskStatus = 'done' | 'in_work' | 'queue';
export type TaskType = 'error' | 'new_func' | 'improvement' | 'documentaion';

export interface Task {
    type: string;
    description: string;
    name: string;
    date: string;
    status: string;
    images?: FileList;
}

export interface TaskSchema {
    tasks: Task[];
    isLoading?: boolean;
    error?: string;
    indexTask?: number;
}
