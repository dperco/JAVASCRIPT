import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import 'index.css'
import 'normalize.css' 
import layout from './components/layout';
//importo BrowserRouter de la librería react-router-dom (previamente instalada)
import { BrowserRouter } from 'react-router-dom';
//envolveré mi aplicación en BrowserRouter
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);