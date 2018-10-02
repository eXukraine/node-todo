import { combineReducers } from 'redux';
import itemReduser from './itemReduser';

export default combineReducers({
    item: itemReduser
})