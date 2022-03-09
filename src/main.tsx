import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import RouterLayer from './layers/RouterLayer';
import { Provider } from 'react-redux';
import { store } from './store';
import '../src/i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterLayer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
