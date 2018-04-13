import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import '../styles/main.scss';
import rootReducer from './reducers';
import App from './components/App';
import registerServiceWorker from './lib/registerServiceWorker';

const store = createStore(
    rootReducer,
    applyMiddleware(logger)
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
