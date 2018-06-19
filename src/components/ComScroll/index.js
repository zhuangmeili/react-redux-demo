import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './index.scss';
class ComScroll extends Component {
  componentWillMount(){
    this._bindScroll();
  }
  componentWillUnmount(){
    this._unbindScroll();
  }

  _bindScroll=()=>{
    window.addEventListener('scroll',this._handleScroll);
    console.log('bind scroll');
  };
  _unbindScroll=()=>{
    if (this._handleScroll) {
      window.removeEventListener('scroll', this._handleScroll);
      console.log('remove scroll');
    }
  };

  _handleScroll=()=>{
    if(this.onScroll){
      this.onScroll();
    }
  };
  onScroll(){
    //内容高度
    var pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight);
    //视窗高度
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    //隐藏的高度
    var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //如果满足触发条件，执行
    //console.log(`pageHeight=${pageHeight},,,viewportHeight=${viewportHeight}`);
    if(pageHeight - viewportHeight - scrollHeight < this.props.distance) {
      this.props.loadMore();
    }
  }
  render() {
    return (
      <div>
        { this.props.children }
      </div>
    );
  }
}
// props 的默认值：
ComScroll.defaultProps = {
  distance: 10
};
//props验证
ComScroll.propTypes={
  distance:PropTypes.number,
  loadMore: PropTypes.func.isRequired,
};

export default ComScroll;
