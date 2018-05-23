import React from 'react';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Home from "./pages/Home/Home";
import Buy from "./pages/Buy/Buy";
// 内嵌路由在 Supply组件中
import Supply from "./pages/Supply/Supply";
import Mine from "./pages/Mine/Mine";


const router=(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact></Route>
      <Route path="/buy" component={Buy} ></Route>
      <Route path="/supply" component={Supply}></Route>
      <Route path="/mine" component={Mine}></Route>
    </Switch>
  </Router>
);

export {router}
