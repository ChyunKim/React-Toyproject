import React from "react";

const TodoList = ({todo,remove}) => {


    const eventClick = (item) => {

        const li = todo.filter(to => to !== item)
        remove(li)
    }
    return (
       <>
        <ul>
            {todo.map(item => 
            <li key = {item}><input id = "check" type = "checkbox" /><label htmlFor = "check">{item}</label>
            <button className='remove' onClick={()=>eventClick(item)}><img src='/trash.png'></img></button>
            </li>)}
        </ul>
       </> 
    )
  }
  
  export default TodoList;