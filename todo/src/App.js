import './App.css';
import React from "react";
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';

function App() {

  const [todo, setTodo] = React.useState([])

  const listAdd = (value) => {
         // 기존 list에 배열을 concat을 사용하여 list 추가    
        if ( !(todo.indexOf(value))) {
            alert('이미 추가된 리스트입니다!') 
        }else {
            const li = todo.concat(value)
            setTodo(li)
        }
  }

  const remove = (value) => {
        setTodo(value)
  }

  return (
        <div className = "App">
            <div className ="todo-container">
                <h1>TODO List</h1>
                <TodoInput listAdd={listAdd} todo = {todo} /> 
                <TodoList todo = {todo} remove={remove}/>         
            </div>
        </div>
  )

}

export default App;
