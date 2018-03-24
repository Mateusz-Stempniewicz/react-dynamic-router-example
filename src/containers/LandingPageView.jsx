import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const LandingPageView = () => {
  return (
    <div>
      <h1>Landing Page</h1>
      <button type="button">Przejdź do widoku aplikacji</button>
    </div>
  )
}

export default withRouter(
  connect()(LandingPageView)
);