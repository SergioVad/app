import { classNames } from '@/lib/classNames/classNames';
import { Navbar } from '../modules/navbar/navbar';
import { Content } from '../modules/content/content';
import cls from './app.module.css';
import { Modal } from '../modules/modal/modal';

export const App = () => {
    return (
        <div className={classNames(cls.App, {}, ['app'])}>
            <Navbar />
            <Content />
            <Modal />
        </div>
    );
};
