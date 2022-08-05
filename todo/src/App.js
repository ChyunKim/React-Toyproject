import './App.css';
import React, { useEffect } from "react";

function App() {
  const [input, setInput] = React.useState('')
  const [list, setList] = React.useState([])
  const [boolcheck, setCheck] = React.useState(false)

  const ListView = () => {
    return (
      <ul>
        {list.map(item => 
            <li key = {item}><input className = "check" type = "checkbox" checked = {boolcheck}/>{item}
            <button className='remove'></button>
          </li>)}
      </ul>
    )
  }

  const eventClick = (e) => {
      input.length === 0 &&  alert('할일을 입력하세요!')
      input.length !== 0 && listAdd(input) || setInput('')
  }

  const listAdd = (value) => {
    // 기존 list에 배열을 concat을 사용하여 list 추가
    const todo = list.concat(value)
    setList(todo)
  }


  return (
    <div className = "App">
      <div className ="todo-container">
        <h1>TODO List</h1>
        <input value = {input} type = "text" onChange={(e)=>setInput(e.target.value)} />
        <button className="plusbtn" onClick={eventClick}>+</button>
        <ListView />
      </div>
    </div>
  );
}

export default App;
