import {combineReducers} from 'redux';

//import reducers
import {counter} from '../containers/Counter/counter.reducer';
import {todo} from '../containers/Todo/todo.reducer';
import {todoFilter} from '../containers/Todo/todo.filter.reducer';


export default combineReducers({
  counter,
  todo,
  todoFilter
})

