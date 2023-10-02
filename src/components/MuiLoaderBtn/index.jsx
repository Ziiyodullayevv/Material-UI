import { CircularProgress, Stack } from "@mui/material";

import React, { useState } from "react";
// yarn add @mui/lab
import LoadingButton from "@mui/lab/LoadingButton";
import { Save } from "@mui/icons-material";

const MuiLoaderBtn = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Ma'lumotlar yuklanmoqda...

    setLoading(false);
  };

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

      <LoadingButton
        onClick={handleClick}
        loading={loading}
        variant="contained"
        color="primary"
      >
        {loading ? <CircularProgress size={24} /> : "Yuklash"}
      </LoadingButton>
    </Stack>
  );
};

export default MuiLoaderBtn;
