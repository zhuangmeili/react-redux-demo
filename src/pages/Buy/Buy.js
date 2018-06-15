import React, { Component } from 'react';
import './Buy.scss';
class Buy extends Component {
  render() {
    return (
      <div className="pages_Buy">
        <header className="header">
          buy pages
        </header>

        <ul>
          <li className="listItem Flex">
            <img className="left" src="http://pic2.ooopic.com/12/42/25/02bOOOPIC95_1024.jpg" alt=""/>
            <div className="right Flex1 HackWidth">
              <h2>这是header</h2>
              <p></p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Buy;
