import { NavigateNext } from "@mui/icons-material";
import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";

const MuiBreadcrumbs = () => {
  return (
    <Box>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={<NavigateNext fontSize="small" />}
        maxItems={3}
        itemsAfterCollapse={2}
      >
        <Link href="#" underline="hover">
          Home
        </Link>
        <Link href="#" underline="hover">
          Blog
        </Link>
        <Link href="#" underline="hover">
          About Me
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
};

export default MuiBreadcrumbs;
