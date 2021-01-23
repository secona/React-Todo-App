import React from "react";

function EmptyTodo() {
  const styles = {
    color: "rgba(0, 0, 0, 0.2)"
  };

  return (
    <h3 style={styles}>
      <i>You have nothing to do! Enjoy your time!</i>
    </h3>
  );
}

export default EmptyTodo;
