import { classNames } from '@/lib/classNames/classNames';
import cls from './modal.module.css';
import { Input } from '@/UI/input/input';
import { Dropdown } from '@/UI/dropdown/dropdown';
import { Textarea } from '@/UI/textarea/textarea';
import { useSelector } from 'react-redux';
import { getTasks } from '../../model/selectors/getTasks/getTasks';
import { getIndexTask } from '../../model/selectors/getIndexTask/getIndexTask';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { TaskSliceActions } from '../../model/slice/taskSlice';
import { Button } from '@/UI/button/button';
import { useCallback } from 'react';

// Модалка с подробной информацией конкретного обращения
export const Modal = () => {
    const dispatch = useAppDispatch();
    const tasks = useSelector(getTasks);
    const indexTask = useSelector(getIndexTask);
    const closeModal = useCallback(() => {
        dispatch(TaskSliceActions.toggleModal(0));
    }, [dispatch]);
    const value = indexTask ? tasks[indexTask - 1].name : undefined;
    const dropdown = indexTask ? tasks[indexTask - 1].type : undefined;
    const textarea = indexTask ? tasks[indexTask - 1].description : undefined;
    const status = indexTask ? tasks[indexTask - 1].status : undefined;
    if (!indexTask) {
        return;
    }
    return (
        <div className={classNames(cls.modal, {}, [])}>
            <div className={cls.blackout}></div>
            <div className={cls.window}>
                <Input readOnly value={value} label="Автор обращения" />
                <Dropdown readOnly value={dropdown} label="Тип запроса" />
                <Dropdown readOnly value={status} label="Статус" />
                <Textarea readOnly header="Описание" value={textarea} />
                <Button
                    className={cls.btn}
                    size="MEDIUM"
                    onClick={closeModal}
                    childen={'Закрыть'}
                />
            </div>
        </div>
    );
};
