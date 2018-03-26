import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './View.css';

const View3 = () => {
  return (
    <div className="view">
      <h2>View 3</h2>
    </div>
  )
}

export default withRouter(
  connect()(View3)
);