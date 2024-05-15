import { classNames } from '@/lib/classNames/classNames';
import cls from './input.module.css';
import { InputHTMLAttributes, memo } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    readonly?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: any;
    resetData?: boolean;
}
export const Input = (props: InputProps) => {
    const { label, value, onChange, readOnly, register, errors, resetData } =
        props;
    return (
        <div className={classNames(cls.input_wrapper, {}, [])}>
            <label className={cls.label} htmlFor={label}>
                {label}
            </label>
            <input
                {...register?.('name', {
                    required: 'Поле обязательно к заполению!',
                    minLength: {
                        value: 3,
                        message: 'Минимум 3 символа',
                    },
                    maxLength: {
                        value: 50,
                        message: 'Максимум 50 символов',
                    },
                })}
                type="text"
                readOnly={readOnly}
                value={value}
                onChange={onChange}
                id={label}
                className={classNames(cls.input, {}, [])}
            />
            {errors?.name && !resetData && (
                <div className={cls.error}>
                    <p>{errors?.name?.message || 'Error'}</p>
                </div>
            )}
        </div>
    );
};
