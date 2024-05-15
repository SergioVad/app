import { formatBytes } from '@/lib/formatBytes/formatBytes';
import { ImagesProps } from '../imageInput';
import cls from './imagesArray.module.css';
import Cross from '../assets/icon/cross.svg';

interface ImagesArrayProps {
    images?: ImagesProps[];
    className?: string;
    handleRemoveItem?: (value: string) => void;
}

export const ImagesArray = (props: ImagesArrayProps) => {
    const { images, handleRemoveItem } = props;
    return (
        <div className={cls.wrapper_images}>
            {images?.map((item, index) => (
                <div key={index} className={cls.block_image}>
                    <div className={cls.wrapper_img}>
                        <img
                            className={cls.img}
                            src={item.src}
                            alt={item.src}
                        />
                        <div className={cls.descr}>
                            <div className={cls.name}>{item.name}</div>
                            <div className={cls.size}>
                                {formatBytes(item.size)}
                            </div>
                        </div>
                    </div>
                    <Cross
                        onClick={handleRemoveItem?.(item.src)}
                        className={cls.cross}
                    />
                </div>
            ))}
        </div>
    );
};
