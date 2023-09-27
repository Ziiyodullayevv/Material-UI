import { Delete } from "@mui/icons-material";
import { IconButton, Stack, Tooltip } from "@mui/material";
import React from "react";

const MuiTooltip = () => {
  return (
    <React.Fragment>
      <Stack sx={{ margin: 5 }} direction={"row"} spacing={3}>
        <Tooltip enterDelay={500} leaveDelay={200} title={"Delete Button"}>
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title={"Delete Button"}>
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      </Stack>

      <Stack sx={{ margin: 5 }} direction={"row"} spacing={3}>
        <Tooltip enterDelay={500} leaveDelay={200} title={"Delete Button"}>
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip arrow title={"Delete Button"}>
          <IconButton>
            <Delete />
          </IconButton>
        </Tooltip>
      </Stack>
    </React.Fragment>
  );
};

export default MuiTooltip;
