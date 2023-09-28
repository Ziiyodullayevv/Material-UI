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
    <React.Fragment>
      <Button onClick={() => setOpen(true)}>Submit</Button>
      {/*  <Snackbar
        message="Form submitted successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
  />*/}

      {/*Cutimization */}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <SnackbarAlert onClose={handleClose}>Form Submited</SnackbarAlert>
      </Snackbar>
    </React.Fragment>
  );
};

export default MuiSnackbar;
