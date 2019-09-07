import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Fields from './components/Refs+forwardRef/Fields'
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Fields />, document.getElementById('root'));

serviceWorker.unregister();