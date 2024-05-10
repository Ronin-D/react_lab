import logo from './logo.svg';
import './App.css';
import {SmartGuyComponent} from './SmartGuy.js'
import {TylerHomeworkComponent} from './TylerHomework.js'
// import {MainComponent} from './task.js'
import { useState } from 'react';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';

const questionItems = ['Я - чайник', 'ресурс не найден', 'ошибка авторизации', 'такой ошибки не существует']
//<Route path="/" element={<QuizComponent/>}/>
function App() {  
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<QuizComponent/>}/>
      <Route path="/smart" element={<SmartGuyComponent/>}/>
      <Route path="/homework" element={<TylerHomeworkComponent/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

function QuizComponent() {
  const [currentAnswer,onAnswerChange] = useState('')
  const callback = e=>{
      onAnswerChange(e)
  }
  let navigate = useNavigate();
  return (
    <div className="App">
      <QuestionTitle title="Что означает код ошибки 418?"/>
      <CurrentAnswer CurrentAnswer={currentAnswer}/>
      <form>
        <QuestionBody 
      questions={questionItems} 
      callback={callback}/>
      <button onClick={
        ()=>{
          if(currentAnswer===questionItems[0]){
            alert('Правильно!')
           navigate('/smart')
          }
          else{
            alert('Ответ неверный')
          }
      }}>Ответить</button>
      </form>
    </div>
  );
}

const QuestionTitle = (props)=>{
  return <h2>{props.title}</h2>
}

const QuestionBody = (props)=>{  
  return props.questions.map(element => {
    return<>
      <QuestionItem questionName = {element} callback={props.callback}/>
      <br/>
    </>
  });
}

const CurrentAnswer = (props)=>{
  return <h3>Текущий ответ: {props.CurrentAnswer}</h3>
}

const QuestionItem = (props) => { 
    return <label>
      {props.questionName}
      <input 
    type='radio' 
    name='question' 
    value={props.questionName}
    onClick={ 
      ()=>{props.callback(props.questionName)}
    }/>
    </label>
    
}

QuestionTitle.defaultProps = {title:"Ваш вопрос"}


export default App;
