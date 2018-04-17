import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import '../styles/main.scss';
import rootReducer from './reducers';
import apiMiddleware from './middlewares/api';
import App from './components/App';
import registerServiceWorker from './lib/registerServiceWorker';

const store = createStore(
    rootReducer,
    {},
    compose(
        applyMiddleware(apiMiddleware),
        applyMiddleware(logger)
    )
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
