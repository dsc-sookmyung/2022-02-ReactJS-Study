import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Clock from './section04/Clock';
import CommentList from './section05/CommentList';
import NotificationList from './section06/NotificationList';
import AttendanceBook from './section10/AttendanceBook';
import Accommodate from './section07/Accommodate';

const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
  <React.StrictMode>
    <Accommodate />
  </React.StrictMode>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
