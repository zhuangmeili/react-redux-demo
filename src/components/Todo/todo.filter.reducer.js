/**
 * 每个xxx.reducer.js包含
 *    actions常量
 *    action 函数
 *    state 初始值 initialStatec
 *    reducer
 *
 * */
//actions常量
const SHOW_ALL='SHOW_ALL';           //显示所有
const SHOW_DELETE='SHOW_DELETE';     //显示带有删除线
const SHOW_NODELETE='SHOW_NODELETE'; //显示不带删除线
const SET_TODO_FILTER='SET_TODO_FILTER';

export const todoAllFilters={
  SHOW_ALL:SHOW_ALL,
  SHOW_DELETE:SHOW_DELETE,
  SHOW_NODELETE:SHOW_NODELETE
};
// action 函数
export const setTodoFilter=(filter)=>({
  type:'SET_TODO_FILTER',
  filter
});

//state 初始值
const initialState=SHOW_ALL;

//reducer
export const todoFilter=(state=initialState,action)=>{
  switch (action.type){
    case SET_TODO_FILTER:
      return action.filter;
    default:
      return state;
  }
};