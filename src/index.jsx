import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import AppPage from './pages/app';
import 'antd/dist/antd.css';
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppPage />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);