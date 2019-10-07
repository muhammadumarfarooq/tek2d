import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Services from "./Services/Services";
import WhoWeAre from "./WhoWeAre/WhoWeAre";
import HoWeDo from "./HowWeDo/HowWeDo";
import Navbar from "./globalComponents/Navbar/Navbar";
import Social from "./Header/Social/Social";
import OurClients from "./OurClients/OurClients";
import Skill from "./Skills/Skills";
import Footer from "./Footer/Footer";
import Showcase from "./Header/Showcase/Showcase";
import About from "./About/About";
import ServicesPlus from "./ServicesPlus/ServicesPlus";
import Team from "../Team/Team";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Social />
          <Navbar />
          <Switch>
            <Route
              path='/'
              exact
              render={props => (
                <Fragment>
                  <Showcase />
                  <Services />
                  <WhoWeAre />
                  <HoWeDo />
                  <Skill />
                  <OurClients />
                  <Footer />
                </Fragment>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={ServicesPlus} />
            <Route exact path='/team' component={Team} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
