import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'; // parent of card
import reportWebVitals from './reportWebVitals';
import 'tachyons';




ReactDOM.render(
  <div >
  <body>
  <App/>
  </body>
  </div>
  ,
  document.getElementById('root')
);

reportWebVitals();
