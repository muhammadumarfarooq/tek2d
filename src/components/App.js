import React from 'react';
import Header from './Header/Header';

import './App.css';
import Services from './Services/Services';
import WhoWeAre from './WhoWeAre/WhoWeAre';

class App extends React.Component {
  render() {
    
    return(
      <div>
        <Header />
        <Services />
        <WhoWeAre />
      </div>
    );
  }
}


export default App;