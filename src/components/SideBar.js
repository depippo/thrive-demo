import React from 'react';
import { NavLink } from 'react-router-dom';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Checkbox from '../containers/Checkbox';

import '../App.css';

const SideBar = () => {

  return (
    <div className="sidebar">
      <p>This demo site was created by John DePippo to demonstrate his enthusiasm for Thrive TRM. The site was built with React, and is loosely based on the appearance of the Thrive platform. Try clicking the links at the top of the page to learn more about John.</p>
    </div>
  );
};

export default SideBar;
