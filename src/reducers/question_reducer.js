import * as types from '../actions/types';
export default function(state={},action){

    switch(action.type){
        case types.GET_QUESTIONS_ALL:
            return {...state,questionList:action.payload}   
        default:
            return state;
    }

}