import { Grid, Box, Paper } from "@mui/material";
import React from "react";

// BreakPoints:
// xs - mobile; sm - tablet; md - desktop; lg and xl for larger monitors;

import { styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const MuiGrid = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Box p={2} bgcolor={"primary.main"}>
            xs=8
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box p={2} bgcolor={"primary.main"}>
            xs=4
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box p={2} bgcolor={"primary.main"}>
            xs=4
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box p={2} bgcolor={"primary.main"}>
            xs=8
          </Box>
        </Grid>
      </Grid>

      <Grid
        container
        rowSpacing={{ xs: 2, sm: 4, md: 12 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>4</Item>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Item>hel</Item>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default MuiGrid;
