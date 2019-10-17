import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Navbar from "./globalComponents/Navbar/Navbar";
import Home from "./Home/Home";
import About from "./About/About";
import ServicesPlus from "./ServicesPlus/ServicesPlus";
import Team from "../Team/Team";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";
import Footer from "./globalComponents/Footer/Footer";

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/services' component={ServicesPlus} />
      <Route exact path='/team' component={Team} />
      <Route exact path='/portfolio' component={Portfolio} />
      <Route exact path='/contact' component={Contact} />
    </Switch>
    <Footer />
  </Router>
);
export default App;
