import React, { Component } from 'react';
import './index.scss';
import ComScroll from '../../components/ComScroll';
class BuyList extends Component {
  constructor(props){
    super(props);
    this.state={
      buyList:[],
      curPage:1,
      pageSize:10,
      isLoading:false,
      isToEnd:false,
      distance:20,
    }
  }
  componentWillMount(){
    this.getPage();
  }
  getPage=()=>{

    let {curPage,pageSize,buyList}=this.state;
    let start=(curPage-1)*pageSize;
    let end=curPage*pageSize;
    let data=[];
    if(curPage>5){
      this.setState({
        isToEnd:true,
        isLoading:false
      });
      return;
    }
    console.log('get current page =' +curPage);
    setTimeout(()=>{
      for(let i=start;i<end; i++){
        data[i]={
          id:i,
          title:'无限加载组件',
          text:'无限滚动加载组件，isToEnd表示已经加载完成，isLoading 分页正在加载中 ',
        }
      }
      this.setState({
        buyList:buyList.concat(data),
        isLoading:false
      })
    },1000);
  };

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

  };
  render() {
    let {distance}=this.state;
    return (
      <div className="pages_BuyList">
        <ComScroll
          loadMore={this.getNextPage}
          distance={distance}>
          <ul>
            {
              this.state.buyList.length?
                this.state.buyList.map(item=>{
                  return(
                    <li className="listItem Flex" key={item.id}>
                      <img className="left" src="http://pic2.ooopic.com/12/42/25/02bOOOPIC95_1024.jpg" alt=""/>
                      <div className="right Flex1 HackWidth">
                        <h2>{item.title}-{item.id}</h2>
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
        </ComScroll>
      </div>
    );
  }
}

export default BuyList;
