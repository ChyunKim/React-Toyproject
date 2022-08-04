import './App.css';
import React from "react";

function App() {
  const [input, setInput] = React.useState('')
  const [list, setList] = React.useState([])

  // input 이벤트 발생
  const eventInput = (e) => {
    // 키가 입력되면 input state 변경되도록
    setInput(e.target.value)

    // 엔터를 입력하면 입력하면 입력된 value 값을 확인하여 입력이 안되었다면 경고창출력
    // 입력이 되었다면 input value 값 todo 리스트에 추가하는 함수 호출
    if(e.key === 'Enter'){
        e.target.value.length === 0 ? alert('할일을 입력하세요!') : listAdd(input)
    }
  }

  // todo리스트 추가 함수
  const listAdd = (value) => {

    // 기존 list에 배열을 concat을 사용하여 list 추가
    const todo = list.concat(value)

    // 추가된 리스트 todo를 state를 이용하여 상태 변경
    setList(todo)
    setInput('')
  }

  return (
    <div className = "App">
      <div className ="todo-container">
        <h1>TODO List</h1>
        <input type = "text" onKeyDown = {(e)=>eventInput(e)} />
        <ul>{list.map(item => <li key = {item}><input type = "checkbox"/>{item}</li>)}</ul>
        <button className="plusbtn">+</button>
      </div>
    </div>
  );
}

export default App;
