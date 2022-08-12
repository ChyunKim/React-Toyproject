import React from "react";

const TodoInput = ({ todo, setTodo }) => {
  const [input, setInput] = React.useState("");

  const listAdd = (value) => {
    // 기존 list에 배열을 concat을 사용하여 list 추가
    // if (!todo.indexOf(value)) {
    //   alert("이미 추가된 리스트입니다!");
    // } else {
    //   const li = todo.concat(value);
    //   setTodo(li);
    // }
    const isDulicate = todo.some((item) => item === value);
    if (isDulicate) {
      alert("이미 추가된 리스트입니다!");
      return;
    }
    setTodo((todo) => [...todo, value]);
  };

  const eventClick = (e) => {
    if (input.length === 0) {
      alert("할일을 입력하세요!");
    } else {
      listAdd(input);
      setInput("");
    }
  };

  return (
    <>
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      />

      <button className="plusbtn" onClick={eventClick}>
        +
      </button>
    </>
  );
};

export default TodoInput;
