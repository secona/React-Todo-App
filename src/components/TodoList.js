import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Divider
} from "@material-ui/core";
import EmptyTodo from "./EmptyTodo";
import CheckIcon from "@material-ui/icons/Check";

function TodoList({ todo }) {
  const FinishTodo = idx => {
    const newTodos = [...todo.todos];
    newTodos.splice(idx, 1)
    todo.setTodos(newTodos);
  }

  return (
    todo.todos != 0 ? 
    <List>
      {todo.todos.map((item, idx) => (
        <>
          <ListItem>
            <ListItemText 
              style={{ wordWrap: "break-word" }} 
              primary={item} 
            />
            <ListItemSecondaryAction>
              <IconButton
                variant="contained"
                color="primary"
                onClick={() => FinishTodo(idx)}
              >
                <CheckIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
          <Divider />
        </>
      ))}
    </List> : <EmptyTodo />
  );
}

export default TodoList;
