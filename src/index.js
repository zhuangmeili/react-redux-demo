import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import {router} from './router';
import registerServiceWorker from './registerServiceWorker';

// redux
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers';
const store=createStore(rootReducer);
//redux :end

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
