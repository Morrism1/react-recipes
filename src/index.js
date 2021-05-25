import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './container/App';
import reducer from './reducer';
import { loadCategories, loadMealDetails } from './actions';

const composeEnhancers = typeof window === 'object'
  // @ts-ignore
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  // @ts-ignore
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    trace: true,
  })
  : compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
store.dispatch(loadCategories());
store.dispatch(loadMealDetails());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
