import React, { Component } from 'react';

import {NavLink} from 'react-router-dom';
import './index.scss';

import Counter from '../../components/Counter';
import Todo from '../../components/Todo';
// 组件引入
class Home extends Component {
  render() {
    return (
      <div className="pages_Home">
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
            <NavLink to="/buy/list" activeClassName="cur">采购 - 列表</NavLink>
          </li>
          <li className="item ">
            <NavLink to="/buy/detail" activeClassName="cur">采购 - 详情</NavLink>
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
