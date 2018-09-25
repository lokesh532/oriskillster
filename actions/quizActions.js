import * as types from './actionTypes';
import questionApi from '../api/questionApi'

export function loadQuestionsSuccess(questions){
  return {type:'LOAD_QUESTIONS_SUCCESS',questions}
}

export function loadQuestions() {
  return function(dispatch){
    return questionApi.getAllQuestions().then(questions =>{
      dispatch(loadQuestionsSuccess(questions));
    }).catch(error =>{
      throw(error)
    });
  }
}
