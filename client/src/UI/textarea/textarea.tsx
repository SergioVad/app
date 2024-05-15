import { classNames } from '@/lib/classNames/classNames';
import cls from './textarea.module.css';
import { TextareaHTMLAttributes, memo } from 'react';
import { FieldValues, UseFormRegister } from 'react-hook-form';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    header?: string;
    readOnly?: boolean;
    register?: UseFormRegister<FieldValues>;
    errors?: any;
    resetData?: boolean;
}
export const Textarea = (props: TextareaProps) => {
    const {
        header,
        placeholder,
        value,
        resetData,
        onChange,
        readOnly,
        register,
        errors,
    } = props;
    return (
        <div className={classNames(cls.wrapper_textarea, {}, [])}>
            <h3 className={cls.header}>{header}</h3>
            <textarea
                {...register?.('description', {
                    required: 'Поле обязательно к заполению!',
                    minLength: {
                        value: 5,
                        message: 'Минимум 5 символов',
                    },
                })}
                readOnly={readOnly}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={cls.textarea}
            />
            {errors?.description && !resetData && (
                <div className={cls.error}>
                    <p>{errors?.description?.message || 'Error'}</p>
                </div>
            )}
        </div>
    );
};
