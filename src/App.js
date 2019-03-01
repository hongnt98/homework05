import React, { Component } from 'react';
import Topbar from './components/topbar/topbar';
import Header from './components/header/header';
import TopBanner from './components/topbanner/topbanner';
import Portfolio from './components/portfolio/portfolio';
import Services from  './components/services/services';
import OurClients from './components/ourclients/ourclients';
import Footer from './components/footer/footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar />
        <Header />
        <TopBanner />
        <Portfolio />
        <Services />
        <OurClients />
        <Footer />
      </div>
    );
  }
}
export default App;
