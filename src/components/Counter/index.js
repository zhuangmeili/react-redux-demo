import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.scss';
import {increment,decrement} from "./counter.reducer";

class Counter extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { counter,onIncrement,onDecrement}=this.props;
    return (
      <div className="counter_wrap">
        <h2 className="header">点击了 <span className="red">{counter}</span>次</h2>
        <button className="button" onClick={onIncrement}>increment + </button>
        <button className="button" onClick={onDecrement}>decrement - </button>

      </div>
    );
  }
}

// 注意 props 传递的参数名字 与 key相同
const mapStateToProps = (state) => ({
  counter: state.counter
});
// 注意 props 传递的参数名字 与 key相同 { onIncrement,}
const mapDispatchToProps = (dispatch) => ({
  onIncrement: () => dispatch(increment()),
  onDecrement: () => dispatch(decrement())
});
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
