import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {router} from './router';
import registerServiceWorker from './registerServiceWorker';

// redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
// 安装redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'
const store=createStore(rootReducer,composeWithDevTools());
//redux :end

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
