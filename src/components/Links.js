import React from "react";
import { Button } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";

function Links() {
  return (
    <Button startIcon={<CodeIcon />} variant="contained" color="primary">
      Source Code
    </Button>
  );
}

export default Links;
