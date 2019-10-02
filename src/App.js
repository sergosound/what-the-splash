import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware, ConnectedRouter } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import rootReducer from './reducers';
import rootSaga from './sagas';

const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
const middlewares = [thunk, sagaMiddleware, routerMiddleware(history)];
const store = createStore(
  rootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Header/>
          <ImageGrid/>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
