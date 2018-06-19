import {combineReducers} from 'redux';

//import reducers
import {counter} from '../components/Counter/counter.reducer';
import {todo} from '../components/Todo/todo.reducer';
import {todoFilter} from '../components/Todo/todo.filter.reducer';


export default combineReducers({
  counter,
  todo,
  todoFilter
})

