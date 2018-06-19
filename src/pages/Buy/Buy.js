import React, { Component } from 'react';
import './Buy.scss';
class Buy extends Component {
  constructor(props){
    super(props);
    this.state={
      buyList:[],
      curPage:1,
      pageSize:10,
      isLoading:false,
      isToEnd:false,
    }
  }
  componentWillMount(){
    this.getPage();
    this._bindScroll();
  }
  getPage=()=>{

    let {curPage,pageSize,buyList}=this.state;
    let start=(curPage-1)*pageSize;
    let end=curPage*pageSize;
    let data=[];
    console.log(`current page= ${curPage},,, start=${start}`);
    console.log('get current page =' +curPage);
    if(curPage>=5){
      this.setState({
        isToEnd:true,
        isLoading:false
      });
      return;
    }
    setTimeout(()=>{
      for(let i=start;i<end; i++){
        data[i]={
          id:i,
          title:'有限无限加载组件',
          text:'无限滚动加载组件，加载一定分页后改为手动加载器(因为有些用户不喜欢永远无限加载，可能他们只是想看 ',
        }
      }
      this.setState({
        buyList:buyList.concat(data),
        isLoading:false
      })
    },1000);
  }

  getNextPage=()=>{
    let {curPage,isToEnd,isLoading}=this.state;
    if(isToEnd){
      return;
    }
    if(!isLoading){
      this.setState({
        isLoading:true,
        curPage:curPage+1
      },()=>{
        this.getPage();
      })
    }

  }
  _bindScroll=()=>{
    window.addEventListener('scroll',this._handleScroll);
  }
  _unbindScroll=()=>{
    if (this._handleScroll) {
      window.removeEventListener('scroll', this._handleScroll);
    }
  }

  _handleScroll=()=>{
    if(this.onScroll){
      this.onScroll();
    }
  }
  onScroll(){
    //真实内容的高度
    var pageHeight = Math.max(document.body.scrollHeight,document.body.offsetHeight);
    //视窗的高度
    var viewportHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0;
    //隐藏的高度
    var scrollHeight = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    //如果满足触发条件，执行
    console.log(`pageHeight=${pageHeight},,,viewportHeight=${viewportHeight}`);
    if(pageHeight - viewportHeight - scrollHeight < 20) {
      this.getNextPage();
    }
  }
  render() {
    return (
      <div className="pages_Buy">
        <ul>
          {
            this.state.buyList.length?
              this.state.buyList.map((item,index)=>{
                return(
                <li className="listItem Flex" key={item.id}>
                  <img className="left" src="http://pic2.ooopic.com/12/42/25/02bOOOPIC95_1024.jpg" alt=""/>
                  <div className="right Flex1 HackWidth">
                    <h2>{item.title}--{item.id}</h2>
                    <p> {item.text} </p>
                  </div>
                </li>)
              })
              :
              ''
          }

        </ul>
        {
          this.state.isLoading?
            <div className="loading">加载中...</div>
            :
            ''
        }
        {
          this.state.isToEnd?
            <div className="toEnd">已经到底了</div>
            :
            ''
        }
      </div>
    );
  }
}

export default Buy;
