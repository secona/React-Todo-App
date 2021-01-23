import React, { useState } from "react";
import { TextField } from "@material-ui/core"

function TodoInput({ todo }) {
  const [input, setInput] = useState('');

  const HandleSubmit = e => {
    e.preventDefault();

    if (!input) return
    todo.setTodos(todo.todos.concat(input));
    setInput('');
  };

  return (
    <form 
      id="todo-form"
      style={{ 
        margin: "8px 15px"
      }}
      onSubmit={HandleSubmit}
    >
      <TextField
        size="small"
        variant="outlined"
        fullWidth
        label="What do you want to do?"
        value={input}
        onChange={e => setInput(e.target.value)}
      />
    </form>
  )
}

export default TodoInput;