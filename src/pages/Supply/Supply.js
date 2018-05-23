import React, { Component } from 'react';

import {Link,Switch,Route} from 'react-router-dom';



import SupplyList from "../SupplyList/SupplyList";
import SupplyDetail from "../SupplyDetail/SupplyDetail";
import './Supply.scss';

class Supply extends Component {
  render() {
    return (
      <div className="supply_wrap">
        <header className="header">供应页面</header>

        <div className="linkList">
          <Link to={'/supply/detail'} replace={true}>supplyDetail</Link>
          <Link to={'/supply/list'} replace={true}>supplyList </Link>
        </div>

        <div className="">
          <Switch>
            <Route path="/supply/detail" component={SupplyDetail}/>
            <Route path="/supply/list" component={SupplyList}/>
          </Switch>
        </div>

      </div>
    );
  }
}

export default Supply;
