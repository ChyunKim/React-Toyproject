import React from "react";

const TodoInput = ({listAdd,todo}) => {
    const [input, setInput] = React.useState('')

    const eventClick = (e) => {
        if( input.length === 0 ) {
          alert('할일을 입력하세요!')
        }else {
          listAdd(input)
          setInput('')
        }  
    }
  
    return (
        <>
          <input value = {input} type = "text" onChange={(e)=>setInput(e.target.value)} />
          <button className="plusbtn" onClick={eventClick}>+</button>
        </>
    );
  }
  
  export default TodoInput;