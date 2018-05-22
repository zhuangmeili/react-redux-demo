import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import About from './pages/About';
import ListPage from './pages/ListPage';
import HomePage from "./pages/HomePage/HomePage";
import BuyPage from "./pages/BuyPage/BuyPage";
import SupplyPage from "./pages/SupplyPage/SupplyPage";
import MinePage from "./pages/MinePage/MinePage";


const router=(
  <Router>
    <Switch>
      <Route path="/" component={HomePage} exact></Route>
      <Route path="/about" component={About}></Route>
      <Route path="/list" component={ListPage}></Route>
      <Route path="/buy" component={BuyPage}></Route>
      <Route path="/supply" component={SupplyPage}></Route>
      <Route path="/mine" component={MinePage}></Route>
    </Switch>
  </Router>
);

export {router}
