import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from "./pages/Home";
import Buy from "./pages/Buy";
import BuyList from "./pages/BuyList";
import BuyDetail from "./pages/BuyDetail";
// 内嵌路由在 Supply组件中
import Supply from "./pages/Supply";
import Mine from "./pages/Mine";


const router=(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/buy" component={Buy} exact></Route>
      <Route path="/buy/detail" component={BuyDetail} exact></Route>
      <Route path="/buy/list" component={BuyList} exact></Route>
      <Route path="/supply" component={Supply} exact></Route>
      <Route path="/mine" component={Mine} exact></Route>
    </Switch>
  </Router>
);

export {router}
