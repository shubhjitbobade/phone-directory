import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PhoneDirectory from './PhoneDirectory';
import reportWebVitals from './reportWebVitals';
import './common/common.css'


ReactDOM.render(
  <React.StrictMode>
    <PhoneDirectory />
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
