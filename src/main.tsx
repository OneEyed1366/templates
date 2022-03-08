import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import RouterLayer from './layers/RouterLayer';
import '../src/i18n';

ReactDOM.render(
  <React.StrictMode>
    <RouterLayer />
  </React.StrictMode>,
  document.getElementById('root')
)
