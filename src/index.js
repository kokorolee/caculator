import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Caculator from './Caculator';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Caculator />, document.getElementById('root'));
registerServiceWorker();
