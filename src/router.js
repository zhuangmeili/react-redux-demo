import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import App from './App';
import About from './pages/About';
import ListPage from './pages/ListPage';

const router=(
  <Router>
    <Switch>
      <Route path="/" component={App} exact></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/list" component={ListPage}></Route>
    </Switch>

  </Router>
);

export {router}
