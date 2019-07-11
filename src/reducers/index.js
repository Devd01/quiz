import { combineReducers } from 'redux';
import questions from './question_reducer';

const rootReducer = combineReducers({
    questions
})

export default rootReducer;