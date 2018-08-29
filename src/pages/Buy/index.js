import React, { Component } from 'react';
import './index.scss';

import PasswordPopup from '../../components/PasswordPopup'
class Buy extends Component {
  constructor(props){
    super(props);
    this.state={

    }
  }
  componentWillMount(){

  }

  render() {
    return (
      <div className="page_buy Flex FlexVer FlexHor">
        <button type="button"> 点击出现弹窗</button>
        <PasswordPopup></PasswordPopup>
      </div>
    );
  }
}

export default Buy;
