import { Mods, classNames } from '@/lib/classNames/classNames';
import cls from './dropdown.module.css';
import SVG_Dropdown from './assets/dropdown.svg';
import { Dispatch, memo, useState } from 'react';

const types: string[] = [
    'Ошибка',
    'Новая функциональность',
    'Улучшение',
    'Документация',
];

interface DropdownProps {
    value?: string;
    setValue?: Dispatch<React.SetStateAction<string>>;
    label?: string;
    readOnly?: boolean;
}

export const Dropdown = memo((props: DropdownProps) => {
    const { label, value, setValue, readOnly } = props;
    const change = !readOnly;
    const [toggleList, setToggleList] = useState<boolean>(false);
    const handleToggleList = () => {
        setToggleList((prevState) => !prevState);
    };
    const handleValue = (value: string) => () => {
        setValue?.(value);
        handleToggleList();
    };
    const mods: Mods = {
        [cls.content]: toggleList,
    };
    const modsCursorPointer: Mods = {
        [cls.dropdown_cursor]: readOnly,
    };
    return (
        <div className={classNames(cls.dropdown_wrapper, {}, [])}>
            <div className={cls.label}>{label}</div>
            <div
                onClick={handleToggleList}
                className={classNames(cls.dropdown, modsCursorPointer, [])}
            >
                <div className={cls.value}>{value}</div>
                {change && <SVG_Dropdown className={cls.svg_icon} />}
            </div>
            {change && (
                <div className={classNames(cls.block_none, mods, [])}>
                    {types.map((item) => (
                        <div key={item} onClick={handleValue(item)}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
});
