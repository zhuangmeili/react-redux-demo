import {combineReducers} from 'redux';

//import reducers
import {counter} from '../containers/Counter/counter.reducer';
import {todo} from '../containers/Todo/todo.reducer';


export default combineReducers({
  counter,
  todo
})

