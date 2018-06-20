import React, { Component } from 'react';
import './index.scss';
import { tool} from '../../utils/tool';
class BuyDetail extends Component {
  constructor(props){
    super(props);
    this.state={
      buyId:0
    }
  }
  componentWillMount(){
    let search=this.props.location.search;
    let buyId=tool.getUrlParam(search,'buyId');
    this.setState({
      buyId:buyId
    })
  }
  render(){
    return (
      <div>
        get buy detail page

        <br/>
        buyId= {this.state.buyId}
      </div>
    )
  }
}

export default BuyDetail;
