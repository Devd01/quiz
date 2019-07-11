import axios from 'axios';
import * as types from './types';
const URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';


export function questionListAll(){
    const request = axios.get(`${URL}`)
                    .then(response => response.data)

    return {
        type: types.GET_QUESTIONS_ALL,
        payload: request   
    }
}
