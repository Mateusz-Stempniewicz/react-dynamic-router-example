import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TopBar from './../components/TopBar';
import Menu from './../components/Menu';
import Footer from './../components/Footer';

const Layout = () => {
  return (
    <div>
      <TopBar />
      <Menu />
      <Footer />
    </div>
  )
}

export default withRouter(
  connect()(Layout)
);