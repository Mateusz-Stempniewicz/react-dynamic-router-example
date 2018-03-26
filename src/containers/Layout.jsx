import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

import TopBar from './../components/TopBar';
import Menu from './../components/Menu';
import Footer from './../components/Footer';

import View1 from './View1';
import View2 from './View2';
import View3 from './View3';

const Layout = ({match}) => {
  return (
    <div>
      <TopBar />
      <Menu />
      <React.Fragment>
        <Route path={`${match.url}/view1`} component={View1} />
        <Route path={`${match.url}/view2`} component={View2} />
        <Route path={`${match.url}/view3`} component={View3} />
      </React.Fragment>
      <Footer />
    </div>
  )
}

export default withRouter(
  connect()(Layout)
);