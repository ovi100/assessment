import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import ServicePackage from './components/pages/ServicePackage';
import Gallery from './components/pages/Gallery';
import FAQ from './components/pages/FAQ';
import Contact from './components/pages/Contact';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/service-package" component={ServicePackage} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/faq" component={FAQ} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </>
  )
}

export default App