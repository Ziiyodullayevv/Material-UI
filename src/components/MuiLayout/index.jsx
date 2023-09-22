import { Box } from "@mui/material";
import React from "react";

const MuiLayout = () => {
  return (
    <Box>
      <Box
        component={"div"}
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          width: "100px",
          height: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Codevalution
      </Box>
      <Box
        display={"flex"}
        height={"100px"}
        width={"100px"}
        bgcolor={"red"}
        p={2}
      ></Box>
    </Box>
  );
};

export default MuiLayout;
