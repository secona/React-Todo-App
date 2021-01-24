import React from "react";
import { IconButton, Tooltip } from "@material-ui/core";

function Link({ Icon, tooltip, href }) {
	// TODO: add flexbox
	return (
		<Tooltip title={tooltip} style={{ margin: "0 10px" }}>
			<IconButton href={href}>
				<Icon/>
			</IconButton>
		</Tooltip>
	)
}

export default Link;