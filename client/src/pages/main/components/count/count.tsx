import { memo } from 'react';
import cls from './count.module.css';

export const Count = memo(() => {
    return <div className={cls.Count}>1 из 1</div>;
});
