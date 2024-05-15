import cls from './content.module.css';
import { useAppDispatch } from '@/hooks/useAppDispatch';
import { useEffect } from 'react';
import { fetchTasks } from '../../model/services/fetchTasks';
import { useSelector } from 'react-redux';
import { getTasks } from '../../model/selectors/getTasks/getTasks';
import AutoSizer from 'react-virtualized-auto-sizer';
import { FixedSizeList as List } from 'react-window';
import { Row } from '../../components/row/Row';
import { HeaderTable } from '../../components/headerTable/headerTable';
import { getErrorTasks } from '../../model/selectors/getErrorTasks/getErrorTasks';
import { ErrorComponent } from '../../components/errorComponent/errorComponent';

export const Content = () => {
    const dispatch = useAppDispatch();
    const tasks = useSelector(getTasks);
    const error = useSelector(getErrorTasks);
    useEffect(() => {
        dispatch(fetchTasks());
    }, []);

    // Запасное окно при ошибке запроса
    if (error) {
        <ErrorComponent />;
    }

    // Реализация виртуализации
    return (
        <main>
            <HeaderTable className={cls.wrapper_header} />
            <AutoSizer>
                {({ width }) => (
                    <List
                        height={712}
                        itemCount={tasks.length}
                        itemSize={50}
                        width={width}
                    >
                        {Row}
                    </List>
                )}
            </AutoSizer>
        </main>
    );
};
