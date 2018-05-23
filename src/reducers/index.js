import {combineReducers} from 'redux';

//import reducers
import {counter} from '../containers/Counter/counter.reducer';


export default combineReducers({
  counter,
})

