import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App headerText ="Header" contentText = "COntent is here" />, document.getElementById('root'));
registerServiceWorker();
