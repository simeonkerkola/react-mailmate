import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import 'materialize-css/dist/css/materialize.min.css';

import App from './components/App';
import reducers from './reducers';

/* Send test emails */
import axios from 'axios';

window.axios = axios;
// Copy to browser's console:
// const survey4 = {
//   title: 'my title',
//   subject: 'my subject',
//   recipients: 'email@gmail.com, x1807156@mvrht.net',
//   body: 'Here is the body of email'
// }
// axios.post('/api/surveys', survey4)
/* */

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
