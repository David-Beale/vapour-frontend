import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AuthRouter from './auth-router';
import { Provider } from 'react-redux';
import configureStore from './redux/store/store';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
     <AuthRouter />
  </Provider>,
  document.getElementById('root')
);

