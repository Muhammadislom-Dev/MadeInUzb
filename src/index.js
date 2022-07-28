import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import './I18next.js'

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<div className='loader' style={{fontSize: "50px", fontWeight: 500, fontFamily: 'Fredoka', width: "100%", height: "100%", justifyContent: "center", display: "flex", alignItems: "center", position: "absolute"}}><div className="load"></div></div>}>
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);
