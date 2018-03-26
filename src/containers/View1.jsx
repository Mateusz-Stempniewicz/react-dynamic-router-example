import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './View.css';

const View1 = () => {
  return (
    <div className="view">
      <h2>View 1</h2>
    </div>
  )
}

export default withRouter(
  connect()(View1)
);