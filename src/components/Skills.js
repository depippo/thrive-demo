import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Tab from 'react-bootstrap/lib/Tab';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';

const Skills = () => {
  return (
  <Tab.Container className="deepblue" defaultActiveKey="first">
    <Row className="clearfix">
      <Col sm={1}>
        <Nav bsStyle="pills" stacked>
          <NavItem className="custom-tab" eventKey="first">
            <span className="pe-7s-browser pe-3x"></span>
              <br/><span className="black-override">Development</span>
          </NavItem>
          <NavItem className="custom-tab" eventKey="second">
            <span className="pe-7s-diskette pe-3x"></span>
              <br/><span className="black-override">Software</span>
          </NavItem>
        </Nav>
      </Col>
      <Col sm={8}>
        <Tab.Content animation>
          <Tab.Pane eventKey="first">
            <div className="container light-blue no-scroll">
               <br></br>
                  <h3 className="horizontal-align name">Development</h3>
                  <br/>
                  <div className="hline"></div>
                  <br/>
                  <ul className="list-group">
                    <li className="list-group-item">Ruby</li>
                    <li className="list-group-item">HTML</li>
                    <li className="list-group-item">CSS</li>
                    <li className="list-group-item">SQL</li>
                    <li className="list-group-item">Wordpress</li>
                    <li className="list-group-item">Sinatra</li>
                    <li className="list-group-item">Ruby on Rails</li>
                    <li className="list-group-item">Javascript</li>
                    <li className="list-group-item">JQuery</li>
                    <li className="list-group-item">Angular</li>
                    <li className="list-group-item">React</li>
                    <li className="list-group-item">Meteor</li>
                  </ul>

            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div className="container light-blue no-scroll">
            
               <br></br>
                  <h3 className="horizontal-align name">Software</h3>
                  <br/>
                  <div className="hline"></div>
                  <br/>
                  <ul className="list-group">
                    <li className="list-group-item">Excel</li>
                    <li className="list-group-item">Powerpoint</li>
                    <li className="list-group-item">Photoshop</li>
                    <li className="list-group-item">Illustrator</li>
                    <li className="list-group-item">InDesign</li>
                  </ul>
            </div>
          </Tab.Pane>
          
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  );
}

export default Skills;


