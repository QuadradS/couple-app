import {combineReducers} from 'redux';
import {list, IList} from './list/';

export interface IStore {
    list: IList
}

const rootReducer = combineReducers({
    list
});

export default rootReducer;
