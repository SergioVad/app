import { Button } from '@/UI/button/button';
import { Arrows } from '../../components/arrows/arrows';
import { Count } from '../../components/count/count';
import cls from './navbar.module.css';
import { CreateTask } from '@/widget/ui/createTask';
import { memo, useCallback, useState } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { addTask } from '@/widget/model/services/addTask';
import { Task } from '../../model/types/TaskSchema';

export const Navbar = memo(() => {
    const [modal, setModal] = useState<boolean>(false);
    const [resetData, serResetData] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const openModal = useCallback(() => {
        setModal(true);
        serResetData(false);
    }, []);
    const closeModal = useCallback(() => {
        setModal(false);
        serResetData(true);
    }, []);
    const addNewTask = useCallback(
        (value: Task) => {
            dispatch(addTask(value));
        },
        [addTask, dispatch],
    );
    return (
        <nav className={cls.Navbar}>
            <Button
                data-testid="open-createTask"
                size="SMALL"
                childen={'Новый запрос'}
                onClick={openModal}
            />
            <Count />
            <Arrows />
            <CreateTask
                addTask={addNewTask}
                resetData={resetData}
                closeModal={closeModal}
                toggle={modal}
            />
        </nav>
    );
});
