import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import reducers from './reducers/reducers';
 
export const history = createHistory();

const middlewares = applyMiddleware(
  routerMiddleware(history),
  logger
);

const store = createStore(
  reducers,
  middlewares
);

export default store;