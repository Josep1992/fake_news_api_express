import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';

//Components
import Home from './components/Home';
import Articles from './components/Articles';

const App = () => (
  <>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:title/articles" component={Articles} />
      </Switch>
    </Router>
  </>
);

export default App;
