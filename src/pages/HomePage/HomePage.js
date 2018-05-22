import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';
import './HomePage.scss';

// 组件引入
class HomePage extends Component {
  render() {
    return (
      <div className="homepage_wrap">

        <p className="passage">
          Home pages
        </p>

        <ul className="footer ">
          <li className="item ">
            <NavLink to="/" activeClassName="cur">首页</NavLink>
          </li>
          <li className="item ">
            <NavLink to="/supply" activeClassName="cur">供应</NavLink>
          </li>
          <li className="item ">
            <NavLink to="/buy" activeClassName="cur">采购</NavLink>
          </li>
          <li className="item ">
            <NavLink to="/mine" activeClassName="cur">我的</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default HomePage;
