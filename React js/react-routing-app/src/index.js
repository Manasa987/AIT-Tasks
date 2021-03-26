import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Router } from 'react-router';

ReactDOM.render(
  <React.StrictMode>
  <Route>
   <App/>
   </Route>   
  </React.StrictMode>,
document.getElementById('root')
);
reportWebVitals();

