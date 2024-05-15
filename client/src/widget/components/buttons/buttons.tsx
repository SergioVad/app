import { HTMLAttributes, memo } from 'react';
import cls from './buttons.module.css';
import { Button } from '@/UI/button/button';

interface ButtonsProps extends HTMLAttributes<HTMLDivElement> {
    closeModal?: () => void;
    onClick?: () => void;
}

export const Buttons = memo((props: ButtonsProps) => {
    const { closeModal, onClick } = props;
    return (
        <div className={cls.btns}>
            <Button
                size="MEDIUM"
                onClick={onClick}
                className={cls.btn}
                childen={'Сохранить'}
            />
            <Button
                size="MEDIUM"
                onClick={closeModal}
                className={cls.btn}
                childen={'Закрыть'}
            />
        </div>
    );
});
