import React from 'react';
import { NavLink } from 'react-router-dom';
import Popover from 'react-bootstrap/lib/Popover';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Checkbox from '../containers/Checkbox';
import '../App.css';

const NavBar = () => {

  function hidePopover() {
    var d = document.getElementById('popover-positioned-bottom');
    d.style.display='none';
  }

  const popoverBottom = (

    <Popover id="popover-positioned-bottom" title="Notifications">
      <div>
        <Row id="red-left" className="clearfix">
          <Col sm={10}>
            <strong>John DePippo is highly motivated to join the Thrive team.</strong>
            <br/>
            He is a dedicated and passionate web developer, and would be thrilled to put his skills to work for Thrive.
          </Col>
          <Col sm={2}>
            <Checkbox/>
          </Col>
        </Row>
      </div>
      <br/>
      <button onClick={hidePopover}>Close</button>
    </Popover>


);

  return (
    <div>
      <ul className="navbar">
      <img className="logo-padding" role="presentation" width="40" src="https://i.imgur.com/QO6itEb.jpg"/><span className="logo">john depippo</span>
        <NavLink className="link-first" to="/">Home</NavLink>
        <NavLink className="link" to="/projects">Projects</NavLink>
        <NavLink className="link" to="/about">About</NavLink>
        <NavLink className="link" to="/skills">Technical Skills</NavLink>
        <OverlayTrigger trigger="click" placement="bottom" overlay={popoverBottom}>
          <span className="pe-7s-bell pe-2x pull-right"></span>
        </OverlayTrigger>
      </ul>
      <div className="hline-full"></div>
    </div>
  );
};

export default NavBar;
