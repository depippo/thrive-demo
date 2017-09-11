import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Tab from 'react-bootstrap/lib/Tab';
import NavItem from 'react-bootstrap/lib/NavItem';
import Nav from 'react-bootstrap/lib/Nav';

const Projects = () => {
  return (
  <Tab.Container className="deepblue" defaultActiveKey="first">
    <Row className="clearfix">
      <Col sm={1}>
        <Nav bsStyle="pills" stacked>
          <NavItem className="custom-tab-projects" eventKey="first">
            <span className="pe-7s-search pe-3x"></span>
              <br/><span className="black-override">Food Finder</span>
          </NavItem>
          <NavItem className="custom-tab-projects" eventKey="second">
            <span className="pe-7s-ball pe-3x"></span>
              <br/><span className="black-override">Custom Draft</span>
          </NavItem>
          <NavItem className="custom-tab-projects" eventKey="third">
            <span className="pe-7s-leaf pe-3x"></span>
              <br/><span className="black-override">Vegan Recipes</span>
          </NavItem>
          <NavItem className="custom-tab-projects" eventKey="fourth">
            <span className="pe-7s-music pe-3x"></span>
              <br/><span className="black-override">Pitchfork Reviews</span>
          </NavItem>
        </Nav>
      </Col>
      <Col sm={8}>
        <Tab.Content animation>
          <Tab.Pane eventKey="first">
            <div className="container light-blue">
             
               <br></br>
                  <h3 className="horizontal-align name">Vegan Food Finder</h3>
                  <br/>
                  <div className="hline"></div>
                  <h5>A Single Page App for locating, researching, and reviewing vegan restaurants.</h5>
                  <img role="presentation" width="480" src="https://i.imgur.com/1rZBkxU.png" />
                  <a className="blue-link" target ="_blank" href="https://github.com/depippo/vegfinder">github.com/depippo/vegfinder</a>
                  <ul>
                    <li>Fully integrated Angular Frontend with Rails Backend, with live updating of SQL database.
                    </li>
                    <li>Leveraged the Foursquare API to retrieve restaurant information, including photos and interactive menus.
                    </li>
                    <li>Implemented smart search capability by incorporating the Google Places Web Service.</li>
                  </ul>

            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <div className="container light-blue">
            
               <br></br>
                  <h3 className="horizontal-align name">Custom Draft</h3>
                  <br/>
                  <div className="hline"></div>
                  <h5>A realtime fantasy sports drafting app, enabling customization of parameters such as player pool, draft order and roster size.</h5>
                  <img role="presentation" width="480" src="https://i.imgur.com/InHbyXA.jpg" />
                  <a className="blue-link" target ="_blank" href="https://github.com/depippo/custom-draft">github.com/depippo/custom-draft</a>
                  <ul>
                    <li>Retrieved data from the Yahoo! API to populate MongoDB with player information.
                    </li>
                    <li>Utilized the Meteor framework to create a realtime, multi-user drafting experience.
                    </li>
                    <li>Built with Angular to create dynamic, responsive views.</li>
                  </ul>
         
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <div className="container light-blue">
               <br></br>
                  <h3 className="horizontal-align name">Vegan Recipes</h3>
                  <br/>
                  <div className="hline"></div>
                  <h5>A Rails App for users to upload recipes, as well as read, rate and favorite recipes from other users. Also includes the ability to cross reference recipes based on attributes such as ingredients and nutritional values.</h5>
                  <img role="presentation" width="480" src="https://i.imgur.com/pRwNXTA.jpg" />
                  <a className="blue-link" target ="_blank" href="https://github.com/depippo/vegan_recipes">github.com/depippo/vegan_recipes</a>
                  <ul>
                    <li>Used AJAX and JQuery to enable asynchronous user interaction with the site.
                    </li>
                    <li>Implemented user verification and permissions through Omniauth and Devise.
                    </li>
                    <li>Created a classic CRUD site architecture via the Ruby on Rails framework.</li>
                  </ul>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="fourth">
            <div className="container light-blue">
               <br></br>
                  <h3 className="horizontal-align name">Pitchfork Reviews</h3>
                  <br/>
                  <div className="hline"></div>
                  <h5>A Ruby Gem that scrapes new music reviews from the internet, and returns them in a simple command line interface, allowing the user to sort by score, read abstracts, and find the best new albums.</h5>
                  <img role="presentation" width="500" src="https://i.imgur.com/rNkKt0U.png" />
                  <a className="blue-link" target ="_blank" href="https://github.com/depippo/pitchfork-reviews">github.com/depippo/pitchfork-reviews</a>
                  <ul>
                    <li>Utilized Nokogiri to scrape music reviews from the web and turn them into Ruby objects.
                    </li>
                    <li>Wrote app logic in Ruby to enable easy user manipulation of data.
                    </li>
                    <li>Packaged and submitted to RubyGems as a downloadable gem.</li>
                  </ul>
            </div>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
  );
}

export default Projects;


