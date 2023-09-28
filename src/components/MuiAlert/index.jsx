import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import React from "react";

const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is an error alert</Alert>
      <Alert severity="info">This is an error alert</Alert>
      <Alert severity="success">This is an error alert</Alert>

      <Alert variant="outlined" severity="error">
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an error alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        action={<Button color="inherit">UNDO</Button>}
      >
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="info">
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="success">
        This is an error alert
      </Alert>
    </Stack>
  );
};

export default MuiAlert;
