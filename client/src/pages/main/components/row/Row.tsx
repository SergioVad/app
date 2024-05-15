import { Mods, classNames } from '@/lib/classNames/classNames';
import cls from './Row.module.css';
import { CSSProperties } from 'react';
import { definitionStatus } from '../../helpers/definitionStatus';
import { definitionType } from '../../helpers/definitionType';
import { useSelector } from 'react-redux';
import { getTasks } from '../../model/selectors/getTasks/getTasks';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { TaskSliceActions } from '../../model/slice/taskSlice';

interface RowProps {
    index: number;
    style: CSSProperties;
}

export const Row = (props: RowProps) => {
    const { index, style } = props;
    const dispatch = useAppDispatch();
    const tasks = useSelector(getTasks);
    const item = tasks[index];
    const mod_type: Mods = {
        [cls[definitionType(item.type)]]: item.type,
    };
    const mod_status: Mods = {
        [cls[definitionStatus(item.status)]]: item.status,
    };
    const openModal = () => {
        dispatch(TaskSliceActions.toggleModal(index + 1));
    };
    return (
        <div style={style}>
            <div className={classNames(cls.tr, {}, [])}>
                <div className={classNames(cls.td, {}, [cls.id])}>
                    {index + 1}
                </div>
                <div className={classNames(cls.td, {}, [cls.type])}>
                    <span className={classNames('', mod_type, [])}>
                        {item.type}
                    </span>
                </div>
                <div
                    onClick={openModal}
                    className={classNames(cls.td, {}, [cls.wrapper_descr])}
                >
                    <div className={cls.descr}>{item.description}</div>
                </div>
                <div className={classNames(cls.td, {}, [cls.name])}>
                    {item.name}
                </div>
                <div className={classNames(cls.td, {}, [cls.date])}>
                    {item.date}
                </div>
                <div className={classNames(cls.td, {}, [cls.status])}>
                    <span className={classNames('', mod_status, [])}>
                        {item.status}
                    </span>
                </div>
            </div>
        </div>
    );
};
