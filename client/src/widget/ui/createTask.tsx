import { Mods, classNames } from '@/lib/classNames/classNames';
import cls from './createTask.module.css';
import { Input } from '@/UI/input/input';
import { Dropdown } from '@/UI/dropdown/dropdown';
import { Textarea } from '@/UI/textarea/textarea';
import { ImageInput } from '@/UI/imageIinput/imageInput';
import { Buttons } from '../components/buttons/buttons';
import {
    ChangeEvent,
    HTMLAttributes,
    memo,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { Task } from '@/pages/main/model/types/TaskSchema';
import { definitionDate } from '@/pages/main/helpers/definitionDate';
import { useForm } from 'react-hook-form';

interface CreateTaskProps extends HTMLAttributes<HTMLDivElement> {
    toggle?: boolean;
    resetData?: boolean;
    closeModal?: () => void;
    addTask?: (value: Task) => void;
}

export const CreateTask = memo((props: CreateTaskProps) => {
    const { toggle, closeModal, resetData, addTask } = props;

    const [input, setInput] = useState<string>('');
    const [textarea, setTextArea] = useState<string>('');
    const [value, setValue] = useState<string>('Ошибка');

    // Сброс данных при закрытии модалки
    useEffect(() => {
        if (resetData) {
            setTextArea('');
            setInput('');
            setValue('Ошибка');
        }
    }, [resetData]);

    // Валидация
    const {
        register,
        formState: { errors },
        handleSubmit,
        clearErrors,
    } = useForm();

    const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /[0-9]/g;
        const onlyText = value.replace(regex, '');
        setInput(onlyText);
    }, []);
    const onChangeTextarea = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement>) => {
            setTextArea(e.target.value);
        },
        [],
    );
    const hanldeCloseModal = useCallback(() => {
        closeModal?.();
        clearErrors();
    }, []);
    const postTask = () => {
        const task: Task = {
            date: definitionDate(),
            description: textarea,
            name: input,
            status: 'В очереди',
            type: value,
        };
        addTask?.(task);

        // Исскусственая задержка
        setTimeout(() => {
            location.reload();
        }, 500);
    };

    const mods: Mods = {
        [cls.modal]: toggle,
    };
    return (
        <article
            data-testid="createTask"
            className={classNames(cls.CreateTask, mods, [])}
        >
            <div className={cls.blackout}></div>
            <div className={cls.window}>
                <Input
                    errors={errors}
                    register={register}
                    value={input}
                    resetData={resetData}
                    onChange={onChange}
                    label="Автор обращения"
                />
                <Dropdown
                    setValue={setValue}
                    value={value}
                    label="Тип запроса"
                />
                <Textarea
                    errors={errors}
                    register={register}
                    value={textarea}
                    onChange={onChangeTextarea}
                    resetData={resetData}
                    header="Добавить описание"
                    placeholder="Введите описание запроса"
                />
                <ImageInput
                    resetData={resetData}
                    header="Добавить изображения"
                />
                <Buttons
                    onClick={handleSubmit(postTask)}
                    closeModal={hanldeCloseModal}
                />
            </div>
        </article>
    );
});
