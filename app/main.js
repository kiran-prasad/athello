import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import game from './reducers/game';
import { Provider } from 'react-redux';
import App from './components/App';
import './styles/appStyles.less';

const store = createStore(game);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById('content'));