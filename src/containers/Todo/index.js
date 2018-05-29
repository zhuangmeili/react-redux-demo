import React, { Component } from 'react';
import {connect} from 'react-redux';
import './index.scss';
import {toggleTodo,addTodo} from './todo.reducer';
import {setTodoFilter,todoAllFilters} from './todo.filter.reducer';

class Todo extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const { list,filter,onAddTodo,onToggle,onChangeFilter}=this.props;
    return (
      <div className="todo_wrap">
        <section className="todo_add">
          <input className="input" type="text" ref={ele=>this.todoInput=ele}/>
          <input className="button" type="button" value="添加todo" onClick={()=>onAddTodo(this.todoInput.value.trim() )}/>
        </section>
        {/* 注意 onClick 里面的方法 ()=>onToggle(item.id)*/}
        <ul className="todo_list">
          {
            list.map((item)=>{
              return <li className={item.isDeleted? 'deleted':''} onClick={ ()=>onToggle(item.id) } key={item.id}>{item.text}</li>
            })
          }
        </ul>
        <section className="todo_filter">
          显示 ：
          <span className={filter===todoAllFilters.SHOW_ALL?'active':''} onClick={()=>onChangeFilter(todoAllFilters.SHOW_ALL)} >全部</span>
          <span className={filter===todoAllFilters.SHOW_DELETE?'active':''} onClick={()=>onChangeFilter(todoAllFilters.SHOW_DELETE)}>带删除线</span>
          <span className={filter===todoAllFilters.SHOW_NODELETE?'active':''} onClick={()=>onChangeFilter(todoAllFilters.SHOW_NODELETE)}>不带删除线</span>
        </section>
      </div>
    );
  }
}

const getFilterTodos=(list,filter)=>{
  switch (filter){
    case todoAllFilters.SHOW_ALL:
      return list;
    case todoAllFilters.SHOW_DELETE:
      return list.filter(item=>item.isDeleted);
    case todoAllFilters.SHOW_NODELETE:
      return list.filter(item=>!item.isDeleted);
    default:
      return list;
  }
};

// props 传递的key
const mapStateToProps = (state) => ({
  list: getFilterTodos(state.todo,state.todoFilter),
  filter: state.todoFilter
});

const mapDispatchToProps = (dispatch) => ({
  onToggle: (id) => dispatch(toggleTodo(id)),
  onAddTodo:(text)=> text&&dispatch(addTodo(text)),
  onChangeFilter:(filter)=> dispatch(setTodoFilter(filter))

});
export default connect(mapStateToProps,mapDispatchToProps)(Todo);
