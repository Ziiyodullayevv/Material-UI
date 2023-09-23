import { Box, Divider, Stack } from "@mui/material";
import React from "react";

const MuiStack = () => {
  return (
    <Stack
      sx={{ border: "1px solid black" }}
      direction={"row"}
      spacing={2}
      divider={
        <Divider
          orientation="vertical"
          sx={{
            background: "red",
            color: "blue",
            textAlign: "center",
            verticalAlign: "center",
            border: "1px solid balck",
          }}
          flexItem
        />
      }
    >
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
    </Stack>
  );
};

export default MuiStack;
