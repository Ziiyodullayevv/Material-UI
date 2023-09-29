import { CircularProgress, LinearProgress, Stack } from "@mui/material";
import React from "react";

const MuiProgress = () => {
  return (
    <Stack spacing={2} width="250px">
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={50} color="success" />
      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={70} color="success" />
      <LinearProgress variant="determinate" value={70} color="success" />
      <LinearProgress variant="determinate" value={70} color="success" />
      <LinearProgress variant="determinate" value={70} color="success" />
      <LinearProgress variant="determinate" value={70} color="success" />
      <LinearProgress variant="determinate" value={70} color="success" />
    </Stack>
  );
};

export default MuiProgress;
