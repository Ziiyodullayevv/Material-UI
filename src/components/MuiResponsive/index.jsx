import { Box } from "@mui/material";
import React from "react";

const MuiResponsive = () => {
  return (
    <Box
      sx={{
        height: 300,
        width: {
          xs: 100, // 0;
          sm: 300, // 600;
          md: 400, // 900;
          lg: 500, // 1200;
          xl: 700, // 1536;
        },
        bgcolor: "qizgish.main",
      }}
    >
      MuiResponsive
    </Box>
  );
};

export default MuiResponsive;
