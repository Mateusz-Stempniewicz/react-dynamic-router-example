import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

const LandingPageView = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <Link to="/app/view1">Przejdź do widoku aplikacji</Link>
    </div>
  )
}

export default withRouter(
  connect()(LandingPageView)
);