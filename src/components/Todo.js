import React, { useState } from "react";
import { Card } from "@material-ui/core";

import TodoList from "./TodoList";
import TodoInput from "./TodoInput";

function Todo() {
  const [todos, setTodos] = useState(["Learn React"]);
  const styles = {
    margin: "20px 0"
  };

  return (
    <Card style={styles}>
      <TodoList todo={{ todos, setTodos }} />
      <TodoInput todo={{ todos, setTodos }} />
    </Card>
  );
}

export default Todo;
