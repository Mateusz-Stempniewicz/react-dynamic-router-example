import React from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <div><Link to="/app/view1">View 1</Link></div>
      <div><Link to="/app/view2">View 2</Link></div>
      <div><Link to="/app/view3">View 3</Link></div>
    </nav>
  )
}

export default Menu;