import React from "react";
import { Typography, Link } from "@material-ui/core";

function Header() {
  return (
    <>
      <Typography variant="h3">React To-do App Demo</Typography>
      <Typography variant="subtitle1">
        by <Link href="https://github.com/secona">secona</Link>
      </Typography>
    </>
  );
}

export default Header;
