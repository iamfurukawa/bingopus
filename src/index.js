import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import AppPage from './pages/app';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppPage />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);