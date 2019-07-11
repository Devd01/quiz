import axios from 'axios';
import * as types from './types';
const URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';
let Data =[]
const request = axios.get(`${URL}`)
                     .then(response =>{
                         response.data.results
                        .map(item=>{
                            item.question=decodeHTML(item.question)
                            return item;
                        }) 
                        Data = response.data.results;
                        return response.data.results;
                        });



const  decodeHTML=html=>{
                        return String(html)
                        .replace(/&amp;/g,'&')
                        .replace( /&quot;/g,'"')
                        .replace( /'/g,'\'')
                        .replace( /&lt;/g,'<')
                        .replace( /&gt;/g,'>')
                        .replace(/&#039;/g,'\'')
                    }


export function questionListAll(){


    return {
        type: types.GET_QUESTIONS_ALL,
        payload: request   
    }
}

export function questionListWithResponse(result){

     
     Data.map((item,index)=>{
         item.response=result[index]
         return item;
     })
     
    return {
        type: types.GET_QUESTIONS_WITH_RESPONSE,
        payload: Data   
    }
}
