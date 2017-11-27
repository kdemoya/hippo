import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/es/storage'
import createElectronStorage from 'redux-persist-electron-storage';
import reducers from './reducers';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const config = {
  key: 'root',
  stateReconciler: true,
  storage: createElectronStorage(),
};

const reducer = persistCombineReducers(config, { ...reducers });
let store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// let store = createStore(combineReducers({ ...reducers }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
persistStore(store, config);


registerServiceWorker();

function render(Component) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp);
  })
}
