import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './include/bootstrap';
import './styles/index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
