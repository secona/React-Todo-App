import React from "react";
import { Container, CssBaseline } from "@material-ui/core";
import "./style.css";

import Todo from "./components/Todo";
import Header from "./components/Header";
import Links from "./components/Links";

export default function App() {
  const styles = { 
    textAlign: "center",
  };

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm" style={styles}>
        <Header />
        <Todo />
        <Links />
      </Container>
    </>
  );
}
