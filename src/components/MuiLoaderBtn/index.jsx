import { Stack } from "@mui/material";

import React from "react";
// yarn add @mui/lab
import LoadingButton from "@mui/lab/LoadingButton";
import { Save } from "@mui/icons-material";

const MuiLoaderBtn = () => {
  return (
    <Stack spacing={2} direction={"row"}>
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator={"Loading..."}>
        Fetch Data
      </LoadingButton>
      <LoadingButton loading variant="outlined" loadingIndicator={"Loading..."}>
        Fetch Data
      </LoadingButton>

      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>

      <LoadingButton
        loading
        variant="outlined"
        loadingPosition="start"
        startIcon={<Save />}
      >
        Save
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoaderBtn;
