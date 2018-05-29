/**
 * 每个xxx.reducer.js包含
 *    actions常量
 *    action 函数
 *    state 初始值 initialState
 *    reducer
 *
 * */
//actions常量
const INCREMENT='INCREMENT';
const DECREMENT='DECREMENT';


//action 函数
export const increment=()=> ({
  type:INCREMENT,
});
export const decrement=()=>({
  type:DECREMENT
});


//state 初始值
const initialState=0;
//reducer
export const counter=(state=initialState,action)=>{
  switch (action.type){
    case INCREMENT:
      return state+1;
    case DECREMENT:
      return state-1;
    default:
      return state;
  }
};




