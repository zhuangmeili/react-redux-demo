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

//state 初始值
const initialState=[
    {id:1001,text:'item1',isDeleted:false},
    {id:1002,text:'item2',isDeleted:true},
    {id:1003,text:'item3',isDeleted:false},
    {id:1004,text:'item4',isDeleted:true},
    {id:1005,text:'item5',isDeleted:false},
  ];

//reducer
export const todo=(state=initialState,action)=>{
  switch (action.type){
    case ADD_TODO:
      return [
        { id:action.id,
          text:action.text,
          isDeleted:false
        },
        ...state
      ];
    case TOGGLE_TODO:
      return state.map(item=>{
        return (item.id === action.id)? {...item,isDeleted:!item.isDeleted} :item;
      });
    default:
      return state;
  }
};