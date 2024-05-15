import { memo } from 'react';
import Next_arr from '../../assets/icons/next_arr.svg';
import Prev_arr from '../../assets/icons/prev_arr.svg';
import cls from './arrows.module.css';

export const Arrows = memo(() => {
    return (
        <div className={cls.Arrows}>
            <Next_arr className={cls.svg} />
            <Prev_arr className={cls.svg} />
        </div>
    );
});
