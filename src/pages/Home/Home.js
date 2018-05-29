import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';
import './Home.scss';

import Counter from '../../containers/Counter';
import Todo from '../../containers/Todo';
// 组件引入
class Home extends Component {
  render() {
    return (
      <div className="home_wrap">

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

        <Counter/>
        <Todo/>

      </div>
    );
  }
}

export default Home;
