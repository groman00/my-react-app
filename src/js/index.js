import React from 'react';
import ReactDOM from 'react-dom';
import '../css/index.css';
import App from './components/App';
import registerServiceWorker from './lib/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
