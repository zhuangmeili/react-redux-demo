/**
 * 每个xxx.reducer.js包含
 *    actions常量
 *    action 函数
 *    state 初始值 initialStatec
 *    reducer
 *
 * */
//actions常量
const ADD_TODO='ADD_TODO';
const TOGGLE_TODO='TOGGLE_TODO';
const SET_TODO_FILTER='SET_TODO_FILTER'; // 设置filter

const SHOW_ALL='SHOW_ALL';           //显示所有
const SHOW_DELETE='SHOW_DELETE';     //显示带有删除线
const SHOW_NODELETE='SHOW_NODELETE'; //显示不带删除线

//action 函数
let nextTodoId=2001;
export const addTodo=(text)=>({
  type:ADD_TODO,
  id:nextTodoId++,
  text
});

export const toggleTodo=(id)=>({
  type:TOGGLE_TODO,
  id
});
// 设置filter
export const setTodoFilter=(filter)=>({
  type:'SET_TODO_FILTER',
  filter
});
export const todoAllFilters={
  SHOW_ALL:SHOW_ALL,
  SHOW_DELETE:SHOW_DELETE,
  SHOW_NODELETE:SHOW_NODELETE
};




//state 初始值
const initialState={
  list:[
    {id:1001,text:'item1',isDeleted:false},
    {id:1002,text:'item2',isDeleted:true},
    {id:1003,text:'item3',isDeleted:false},
    {id:1004,text:'item4',isDeleted:true},
    {id:1005,text:'item5',isDeleted:false},
  ],
  filter:SHOW_ALL
};

//reducer
export const todo=(state=initialState,action)=>{
  let { list }=state;
  switch (action.type){
    case ADD_TODO:
      list.push({
        id:action.id,
        text:action.text,
        isDeleted:false
      });
      console.log(list);
      return {...state,list};
    case TOGGLE_TODO:
      list=list.map(item=>{
        return (item.id === action.id)? {...item,isDeleted:!item.isDeleted} :item;
      });
      return {...state,list};
    case SET_TODO_FILTER:
      return {...state,filter:action.filter};
    default:
      return state;
  }
};