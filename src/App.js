import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


// Import global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import NavBar from './components/Navbar';
import ChoreChart from './components/ChoreChart';
import Results from './components/Results';
import BonusResults from './components/BonusResult';
import Footer from './components/Footer'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
  AOS.init();
  return (
    <div>
      <Router>
        <>
          <NavBar />
          <Switch>
            <Route exact path="/" component ={ChoreChart} />
            <Route path="/Chore-Chart" component={ChoreChart} />
            <Route exact path="/results" component={Results} />
            <Route exact path="/bonusresults" component={BonusResults} />
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />

          </Switch>
          <Footer/>
        </>
    </Router>
    </div>
  );
}

export default App;
