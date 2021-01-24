import React from "react";
import { Grid } from "@material-ui/core";
import CodeIcon from "@material-ui/icons/Code";
import Link from "./Link";

function Links() {
  return (
  	<Grid container direction="row" justify="center" alignItems="center">
    	<Link Icon={CodeIcon} tooltip="Source Code" href="https://github.com/secona/React-Todo-App"/>
    </Grid>
  );
}

export default Links;