import { memo } from 'react';
import cls from './errorComponent.module.css';

export const ErrorComponent = memo(() => {
    const reloadPage = () => {
        location.reload();
    };
    return (
        <div className={cls.error}>
            <p>Произошла ошибка, попробуйте перезагрузить страницу</p>
            <button onClick={reloadPage}></button>
        </div>
    );
});
