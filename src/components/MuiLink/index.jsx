import { Link, Stack } from "@mui/material";
import React from "react";

const MuiLink = () => {
  return (
    <Stack spacing={3} direction={"row"} m={4}>
      <Link href="" underline="none">
        Producs
      </Link>
      <Link href="" variant="body" color={"secondary"} underline="always">
        Producs
      </Link>
    </Stack>
  );
};

export default MuiLink;
