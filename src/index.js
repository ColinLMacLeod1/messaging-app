import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'

import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import chat from './reducers'
import setupSocket from './sockets'
import username from './utils/name'
import handleNewMessage from './sagas'

const sagaMiddleware = createSagaMiddleware();
const store = createStore(chat, applyMiddleware(sagaMiddleware))
const socket = setupSocket(store.dispatch, username)

sagaMiddleware.run(handleNewMessage, {socket, username})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
