import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import GlobalStyle from './Global.style';
import store from './redux/store';

// import '@babel/core';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
);

registerServiceWorker();
