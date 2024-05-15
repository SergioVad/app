import { ButtonHTMLAttributes, ReactNode, memo } from 'react';
import cls from './button.module.css';
import { classNames } from '@/lib/classNames/classNames';

type Syze = 'SMALL' | 'MEDIUM';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    childen: ReactNode;
    onClick?: () => void;
    size?: Syze;
    className?: string;
}

export const Button = memo((props: ButtonProps) => {
    const { childen, className, onClick, size = 'SMALL' } = props;
    return (
        <button
            onClick={onClick}
            className={classNames(cls.Button, {}, [cls[size], className])}
        >
            <span>{childen}</span>
        </button>
    );
});
