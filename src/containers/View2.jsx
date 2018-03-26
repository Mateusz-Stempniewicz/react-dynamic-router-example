import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './View.css';

const View2 = () => {
  return (
    <div className="view">
      <h2>View 2</h2>
    </div>
  )
}

export default withRouter(
  connect()(View2)
);