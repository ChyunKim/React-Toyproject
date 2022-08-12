import "./App.css";
import React from "react";
import TodoInput from "./component/TodoInput";
import TodoList from "./component/TodoList";

function App() {
  const [todo, setTodo] = React.useState([]);

  return (
    <div className="App">
      <div className="todo-container">
        <h1>TODO List</h1>
        <TodoInput todo={todo} setTodo={setTodo} />
        <TodoList todo={todo} setTodo={setTodo} />
      </div>
    </div>
  );
}

export default App;
