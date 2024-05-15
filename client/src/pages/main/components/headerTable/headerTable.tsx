import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useState } from 'react';
import { fetchTasks } from '../../model/services/fetchTasks';
import cls from './headerTable.module.css';
import { classNames } from '@/lib/classNames/classNames';

interface HeaderTableProps {
    className?: string;
}

export const HeaderTable = (props: HeaderTableProps) => {
    const { className } = props;
    const [state, setState] = useState('');
    const [orderAsc, setOrderAsk] = useState(false);
    const dispatch = useAppDispatch();
    const handleFilterNum = (item: string) => () => {
        if (state !== item) {
            setState(item);
            setOrderAsk(!orderAsc);
        } else {
            setOrderAsk(!orderAsc);
        }
        dispatch(fetchTasks({ item, orderAsc }));
    };
    return (
        <>
            <hr className={cls.hr} />
            <div className={className}>
                <div className={classNames(cls.th, {}, [cls.th_id])}>
                    Номер запроса
                </div>
                <div
                    className={classNames(cls.th, {}, [cls.hover, cls.type])}
                    onClick={handleFilterNum('type')}
                >
                    Тип запроса
                </div>
                <div className={classNames(cls.th, {}, [cls.descr])}>
                    Описание
                </div>
                <div
                    className={classNames(cls.th, {}, [cls.hover, cls.name])}
                    onClick={handleFilterNum('name')}
                >
                    Пользователь
                </div>
                <div
                    className={classNames(cls.th, {}, [cls.hover, cls.date])}
                    onClick={handleFilterNum('date')}
                >
                    Дата
                </div>
                <div
                    className={classNames(cls.th, {}, [cls.hover, cls.status])}
                    onClick={handleFilterNum('status')}
                >
                    Статус
                </div>
            </div>
            <hr className={cls.hr} />
        </>
    );
};
