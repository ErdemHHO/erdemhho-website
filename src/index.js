import React from 'react';
import { createRoot } from 'react-dom'; // ReactDOM yerine createRoot kullanıyoruz
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

/* GLOBAL VARIABLES */

window.$primaryLanguage = 'en';
window.$secondaryLanguage = 'pl';
window.$primaryLanguageIconId = 'primary-lang-icon';
window.$secondaryLanguageIconId = 'secondary-lang-icon';

// ReactDOM.render(<App />, document.getElementById('root'));
createRoot(document.getElementById('root')).render(<App />); // createRoot kullanıyoruz
serviceWorker.register();
