import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PluginOverview from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PluginOverview />, document.getElementById('root'));
registerServiceWorker();
