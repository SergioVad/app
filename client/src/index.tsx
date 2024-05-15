import ReactDom from 'react-dom/client';
import '@/styles/index.css';
import store from './store/config/store';
import { Provider } from 'react-redux';
import { App } from './pages/main/ui/app';

const rootElement = document.getElementById('root');

if (!rootElement) {
    throw new Error(
        'Контейнер rootElement не найден. Не удалось вмонтировать реакт приложение',
    );
}

const root = ReactDom.createRoot(rootElement);
root.render(
    <Provider store={store}>
        <App />
    </Provider>,
);
