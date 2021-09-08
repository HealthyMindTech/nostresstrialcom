import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import GlobalStyles from './globalStyles'
import { Navbar, Footer } from './components';
import Home from './pages/HomePage/Home';
import Industry from './pages/Industry/Industry';
import Investigators from './pages/Investigators/Investigators';
import Patients from './pages/Patients/Patients';
import Login from './pages/Login/Login';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
      <Router>
          <GlobalStyles />
          <ScrollToTop />
          <Navbar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/industry' component={Industry} />
            <Route path='/investigators' component={Investigators} />
            <Route path='/patients' component={Patients} />
            <Route path='/login' component={Login} />
          </Switch>
          <Footer />
      </Router>
        
    
  );
}

export default App;
