import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Tab from 'react-bootstrap/lib/Tab';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';
import QuoteForm from '../containers/QuoteForm'
import Quotes from '../containers/Quotes'


const About = () => {
  return (
  <Tab.Container className="deepblue" defaultActiveKey="first">
    <Row className="clearfix">
      <Col sm={1}>
        <Nav bsStyle="pills" stacked>
          <NavItem className="custom-tab" eventKey="first">
            <span className="pe-7s-user pe-3x"></span>
              <br/><span className="black-override">Overview</span>
          </NavItem> 
          <NavItem className="custom-tab" eventKey="second">
            <span className="pe-7s-notebook pe-3x"></span>
              <br/><span className="black-override">Experience</span>
          </NavItem>
          <NavItem className="custom-tab" eventKey="third">
            <span className="pe-7s-clock pe-3x"></span>
              <br/><span className="black-override">Activity</span>
          </NavItem>
          <NavItem className="custom-tab" eventKey="fourth">
            <span className="pe-7s-chat pe-3x"></span>
              <br/><span className="black-override">Comments</span>
          </NavItem>
        </Nav>
      </Col>
      <Col sm={8}>
        <Tab.Content animation>
          <Tab.Pane eventKey="first">
            <div className="container light-blue">
             
                <br></br>
                
                <img role="presentation" width="60" className="circular--square horizontal-align" src="https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAjjAAAAJDI2ZWQzMDc5LWVhOGYtNGNhMy1iZGMxLWVmNDU4NGQyZDAwNA.jpg" />
                  <h1 className="horizontal-align name">John DePippo</h1>
                  <br/>
                  <div className="hline"></div>
                  <h3> Full stack web developer</h3>
                  <a className="blue-link" href="mailto: jdepippo@gmail.com">jdepippo@gmail.com</a>
                  <p>phone 603-545-7895</p>
                  <a href="https://www.linkedin.com/in/johndepippo" target="_blank">
                    <img role="presentation" width="20" src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-linkedin-square1-128.png"/>
                  </a>
                  <h4>Career highlights</h4>
                  <p>John DePippo is a full stack web developer with expertise in a variety of languages and frameworks including Wordpress, HTML, Ruby on Rails, Javascript, Angular, React, and more. He has built a number of fully functioning sites from the ground up. His most recent project is Vegan Food Finder, an Angular single page app with a fully integrated Rails backend. Vegan Food Finder allows users to search their area for the best vegan food as recommended by fellow users. It retrieves data from the Foursquare API, and allows users to view menus, post reviews, recommend menu items, and save their favorite restaurants to their personal collection. Another of John’s recent projects is a custom fantasy sports drafting app, built with Meteor and MongoDB, and featuring a real-time, multi-user drafting experience. He’s written everything from simple Command Line Interface Ruby gems, to full scale, dynamic website.
                  </p>
                  <p>
                  Prior to transitioning into web development, John worked in the fields of graphic design and music licensing. As a graphic designer with Schneck-DePippo graphics, he used Adobe Creative Suite and QuarkXPress to create page layouts and design graphical elements for college textbooks. From 2007-2015, John worked in music licensing for Boosey & Hawkes. Starting as a part-time employee, he worked his way up to managing the licensing department, a staff of seven. In addition to overseeing the day-to-day operations of the team, he was responsible for maintaining positive relationships with composers and performing artists, administering licenses to our over 2,000 customers annually, and managing the department’s budget.
                  </p>
         

            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div className="container light-blue">
            
              <h4>Employment History</h4>
              <div className="hline-space-below"></div>
              <strong>Boosey & Hawkes</strong> - New York City, NY, 8/07 - 4/16<br/>
              Manager, Rental & Licensing, 9/15 - 4/16<br/>
              Assistant Manager, Rental & Licensing, 1/15 - 9/15<br/>
              Librarian, 8/07 - 1/15<br/>
              <ul>
                <li>Oversaw all concert licensing and music rentals for the Rental catalogue in North and South America, an average of 6,000 licenses completed annually to over 2,000 customers.</li>
                <li>Led the department through large-scale overhaul of operations, relocating entire physical library to offsite location while maintaining customer service and increasing revenue 3% over prior year.</li>
                <li>Managed the circulating collection of the Boosey & Hawkes Music Publishers’ rental catalogue and agency classical music catalogues, including over 10,000 unique titles.</li>
                <li>Fostered and maintained positive relatinships with composers, artists and presenting organizations across North America.</li>
                </ul><br/>
              <strong>Schneck-DePippo Graphics</strong> - Concord, NH, 7/02 - 8/07 Graphic Designer<br/>
                <ul>
                  <li>Worked on both college-level textbooks and professional trade books.</li>
                  <li>Responsible for typesetting, designing graphical elements, and general technical support.</li>
                  <li>Developed expertise in Adobe Creative Suite and QuarkXPress.</li>
                </ul>
              <br/>
              <h4>Education</h4>
              <div className="hline-space-below"></div>
              <strong>Flatiron School</strong> - 2016
                <ul>
                  <li>Full Stack Web Development, Ruby on Rails and JavaScript online program</li>
              </ul>
              <strong>Bennington College</strong> - Bennington, VT - 2006
              <ul>
                <li>BA: Music Composition and Theory</li>
              </ul>
         
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <div className="container light-blue">
              <h4>Activity</h4>
              <div className="hline-space-below"></div>
              <div className="quote">
                <p>Interviwed with John Parsons and Joe Krill.</p>
                <p className="author">- 08/29/17</p>
                <div className="hline"></div> <br/>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            <div className="container light-blue">
              <Quotes/>
              <QuoteForm/>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  );
}






export default About;


