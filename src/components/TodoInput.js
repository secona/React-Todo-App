import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';

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
        margin: "8px 15px",
        display: "flex"
      }}
      onSubmit={HandleSubmit}
    >
      <TextField
        size="small"
        variant="outlined"
        label="What do you want to do?"
        value={input}
        fullWidth
        onChange={e => setInput(e.target.value)}
      />
      <Button 
        variant="contained"
        startIcon={<AddIcon />}
        color="primary"
        type="submit"
        disableElevation
      >
        Add
      </Button>
    </form>
  )
}

export default TodoInput;