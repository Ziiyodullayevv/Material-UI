import { Mail } from "@mui/icons-material";
import { Badge, Stack } from "@mui/material";
import React from "react";

const num = [1, 2, 3, 4, 5, 6];

const MuiBadge = () => {
  return (
    <Stack m={5} direction={"row"} spacing={3}>
      <Badge badgeContent={6} color="primary">
        <Mail />
      </Badge>
      <Badge badgeContent={100} color="primary" max={999}>
        <Mail />
      </Badge>
      <Badge
        variant="dot"
        invisible={num.length === 0}
        badgeContent={100}
        color="primary"
        max={999}
      >
        <Mail />
      </Badge>
    </Stack>
  );
};

export default MuiBadge;
