import cls from './imageInput.module.css';
import {
    ChangeEvent,
    InputHTMLAttributes,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { ImagesArray } from './components/imagesArray';

export interface ImagesProps {
    src: string;
    name: string;
    size: number;
}
interface ImageInput extends InputHTMLAttributes<HTMLInputElement> {
    header?: string;
    resetData?: boolean;
}

export const ImageInput = (props: ImageInput) => {
    const { header, resetData } = props;
    const [images, setImages] = useState<ImagesProps[]>([]);
    const [error, setError] = useState<string>('');
    const handleRemoveItem = (value: string) => () => {
        setImages(images.filter((item) => item.src !== value));
    };

    // Сброс данных при закрытии модалки
    useEffect(() => {
        if (resetData) {
            setImages([]);
            setError('');
        }
    }, [resetData]);

    // Реализация добавления предпросмотра изображений
    const onFileInput = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        const fileList = e.target.files;
        if (fileList) {
            Array.from(fileList).forEach((file) => {
                if (!file.type.match('image')) {
                    setError('Можно загружать только изображения!');
                    setImages([]);
                    return;
                }
                setError('');
                setImages([]);
                const reader = new FileReader();
                reader.onload = (ev) => {
                    const src = ev.target?.result;
                    typeof src === 'string' &&
                        setImages((prev) => [
                            ...prev,
                            { src: src, name: file.name, size: file.size },
                        ]);
                };
                reader.readAsDataURL(file);
            });
        }
    };
    return (
        <div className={cls.ImageInput}>
            <h3>{header}</h3>
            <label className={cls.label}>
                <input
                    type="file"
                    accept={'image/*'}
                    multiple
                    onChange={onFileInput}
                    hidden
                />
                <div className={cls.x_line}></div>
                <div className={cls.y_line}></div>
            </label>
            {error && <div className={cls.error}>{error}</div>}
            {images?.length !== 0 && (
                <ImagesArray
                    handleRemoveItem={handleRemoveItem}
                    images={images}
                />
            )}
        </div>
    );
};
