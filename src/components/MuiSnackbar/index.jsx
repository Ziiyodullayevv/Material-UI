import { Alert, Button, Snackbar } from "@mui/material";
import React, { useState, forwardRef } from "react";

const SnackbarAlert = forwardRef(function SnackbarAlert(props, ref) {
  return <Alert elevation={6} ref={ref} {...props} />;
});

const MuiSnackbar = () => {
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/*Cutimization */}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose} severity="success">
          Form Submited
        </SnackbarAlert>
      </Snackbar>
    </div>
  );
};

export default MuiSnackbar;
