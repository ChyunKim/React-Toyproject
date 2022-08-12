import React from "react";

const TodoList = ({ todo, setTodo }) => {
  const eventClickRemove = (item) => {
    const li = todo.filter((todoEle) => todoEle !== item);
    setTodo(li);
  };

  const eventClickEdit = (item) => {
    const editInput = prompt("수정할 리스트를 작성하세요!");
    const li = todo.map(
      (todoEle) => (todoEle = todoEle === item ? editInput : todoEle)
    );
    setTodo(li);
  };

  return (
    <>
      <ul>
        {todo.map((item) => (
          <li key={item}>
            <input id="check" type="checkbox" />
            <label htmlFor="check">{item}</label>
            <button className="edit" onClick={() => eventClickEdit(item)}>
              Edit
            </button>
            <button className="remove" onClick={() => eventClickRemove(item)}>
              <img src="/trash.png"></img>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
