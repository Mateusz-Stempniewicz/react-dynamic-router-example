import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';

import store, { history } from './store';

import './index.css';
import LandingPageView from './containers/LandingPageView';
import Layout from './containers/Layout';


import registerServiceWorker from './registerServiceWorker';

render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <div>
          <Route exact path="/" component={LandingPageView} />
          <Route path="/app" component={Layout} />
        </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
